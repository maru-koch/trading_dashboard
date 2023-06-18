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

class Pair(models.Model):
    """ A model for the currency pair """

    base = models.CharField(max_length=255)
    quote = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"{self.base}/{self.support}"
    
class Trade(models.Model):
    """ The Trade(s) made by the User """
    id = models.UUIDField(primary_key=True, default=uuid4(), unique=True)
    user = models.Model(User, on_delte=models.CASCADE)
    type = models.CharField(max_length=255, choices=TRADE_TYPES)
    currency_pair = models.ForeignKey(Pair, related_name='trades', on_delete=models.CASCADE)
    amount = models.DecimalField(default=0.0, decimal_places=2, max_digits=100)
    is_closed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)


class Funds(models.Model):
    """ Funds in User's account """
    amount = models.DecimalField(default=0.0, decimal_places=2, max_digits=6)

    def deposit(self, amount):
        self.amount += amount

    def widthdraw(self, amount):
        self.amount -= amount

    def __str__(self) -> str:
        return self.amount
    
@receiver(post_save, sender=User)
def create_user_token(sender, instance, created, **kwargs):
    """ Creates a token for a new created User """
    if created:
        Token.objects.create(user=instance)
        instance.token.save()