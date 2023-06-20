from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from uuid import uuid4
from django.conf import settings
from decimal import Decimal
# Create your models here.

TRADE_TYPES =(
    ('sell', 'Sell'),
    ('buy', 'Buy')
)

TRADE_CURRENCY=(
    ('usd', 'USD'),
    ('ngn', 'NGN')
)

class Pair(models.Model):
    """ A model for the currency pair """
    base = models.CharField(max_length=255)
    quote = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"{self.base}/{self.quote}"
    

class Trade(models.Model):
    """ The Trade(s) made by the User """

    id = models.UUIDField(primary_key=True, default=uuid4, unique=True)
    trader = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='trades')
    units = models.IntegerField(default=1000)
    pair = models.ForeignKey(Pair, on_delete=models.CASCADE)
    open_price = models.DecimalField(default=0.0, decimal_places=2, max_digits=100)
    date_opened = models.DateTimeField(auto_now_add = True)
    close_price = models.DecimalField(default=0.0, decimal_places=2, max_digits=100, blank=True)
    date_closed = models.DateTimeField(auto_now = True, blank=True)
    is_closed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.trader}-{self.pair}"
    
    
class Fund(models.Model):
    """ Funds in User's account """

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="fund")
    amount = models.DecimalField(default=0.0, decimal_places=2, max_digits=6)
    currency=models.CharField(max_length=255, choices=TRADE_CURRENCY, default='usd')

    def __str__(self) -> str:
        return f"{self.amount}"

class TradeSummary(models.Model):
    """ Summaries of a closed trade """
    trade = models.OneToOneField(Trade, on_delete=models.CASCADE, related_name="summary")
    amount = models.DecimalField(decimal_places=4, max_digits=7, editable=False)
    balance = models.DecimalField(decimal_places=4, max_digits=7, editable=False)
    comment = models.CharField(max_length=200, default='loss', editable=False)

    def __str__(self) -> str:
        return f"{self.amount}-{self.balance}-{self.comment}"

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_token(sender, instance, created, **kwargs):
    """ Creates a token for a new created User """
    if created:
        Token.objects.update_or_create(user=instance)

@receiver(post_save, sender=Trade)
def create_trade_summary(sender, instance, created, **kwargs):
    fund = instance.trader.fund
    if instance.is_closed: 
        open_price = instance.open_price
        closed_price = instance.close_price
        unit = instance.units
        amount, balance, comment = profit_loss(open_price, closed_price, unit, fund)
        summary = TradeSummary(instance.id, amount=str(amount), balance=str(balance), comment=comment)
        summary.save()


 

def profit_loss(open_price:float, closed_price:float, unit:str, fund) -> tuple([int, int, str]):
    """ Estimates if the trader made profit or loss and the balance at the end of the trade """
        
    global comment 

    price_diff = float(closed_price - open_price)

    percentage_lot = unit/100000

    _returned_amount =  (price_diff * 10 * percentage_lot) * float(fund.amount)

    profit_loss = Decimal.from_float(_returned_amount)

    if _returned_amount <= 0:
        comment = 'loss'
        fund.amount += profit_loss

    else:
        comment = 'profit'
        fund.amount += profit_loss

    balance = fund.amount
    fund.save()

    print("TRADE HISTORY:", round(_returned_amount, 2),  round(balance, 2), comment)

    return round(_returned_amount, 2), round(balance, 2), comment
"""
{
    token : auth_token,
    username: user1@gmail.com
    name: user name,
    email: user@gmail.com,
    fund: {amount:100, currency:usd},
    manage: auth_token

    trades =[
        {
            id: uuid
            unit:1_000_000,
            pair: USD/EUR
            open_price: 1.8,
            open_date: datetime
            close_price: 1.2,
            close_date: datetime
            is_closed:True
        }
    ]

    history:
    [
        {
            trade_id: uuid
            amount: $10
            balance: $110,
            comment: profit
        },
        {
            trade_id: uuid
            amount: -5
            balance: $105,
            status: loss
        }
    
    ]
}
"""