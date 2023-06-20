from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Trade, Fund, Pair, TradeSummary


class PairSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pair
        fields="__all__"

class FundSerializer(serializers.ModelSerializer):
    class Meta:
        model=Fund
        fields="__all__"

class TradeSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model=TradeSummary
        fields=('amount', 'balance', 'comment')

class TradeSerializer(serializers.ModelSerializer):

    """ 
    Serializes the Trade model. accesses trade
    summary models through the related names
    
    """
    #summary = TradeSummarySerializer()

    class Meta:
        model=Trade
        fields=('id', 'units', 'pair_id', 'open_price', 'date_opened', 'close_price', 'date_closed', 'is_closed')


class UserSerializer(serializers.ModelSerializer):
    
    """ 
    Serializes the User model. accesses the trade 
    and fund models through the related names

    """

    trades = TradeSerializer()
    fund = FundSerializer()

    class Meta:
        model=User
        fields=('id', 'username', 'first_name', 'last_name', 'email', 'fund', 'trades')


