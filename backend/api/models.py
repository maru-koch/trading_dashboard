from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from uuid import uuid4
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
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='trades')
    units = models.IntegerField(default=1000)
    pair = models.ForeignKey(Pair, on_delete=models.CASCADE)
    open_price = models.DecimalField(default=0.0, decimal_places=2, max_digits=100)
    date_opened = models.DateTimeField(auto_now_add = True)
    close_price = models.DecimalField(default=0.0, decimal_places=2, max_digits=100, blank=True)
    date_closed = models.DateTimeField(auto_now = True, blank=True)
    is_closed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.user}-{self.pair}"
    
    
class Fund(models.Model):
    """ Funds in User's account """
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="fund")
    amount = models.DecimalField(default=0.0, decimal_places=2, max_digits=6)
    currency=models.CharField(max_length=255, choices=TRADE_CURRENCY, default='usd')

    def __str__(self) -> str:
        return f"{self.amount}"

class TradeSummary(models.Model):
    trade = models.OneToOneField(Trade, on_delete=models.CASCADE, related_name="summary")
    amount = models.IntegerField(default=0.0, blank=True)
    balance = models.DecimalField(default=0.0, decimal_places=2, max_digits=7, blank=True)
    comment = models.CharField(max_length=200, default='loss', blank=True)

    def __str__(self) -> str:
        return f"{self.amount}-{self.balance}-{self.comment}"

@receiver(post_save, sender=User)
def create_user_token(sender, instance, created, **kwargs):
    """ Creates a token for a new created User """
    if created:
        Token.objects.update_or_create(user=instance)

# @receiver(post_save, sender=User)
# def generate_trades(sender, instance, created, **kwargs):
#     """ Generates trades for the created User """
#     trades = GenerateTrade(user=instance)
#     trades.generate(10)


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