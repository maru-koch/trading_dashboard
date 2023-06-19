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

    pair = PairSerializer()
    summary = TradeSummarySerializer()

    class Meta:
        model=Trade
        fields=('id', 'unit', 'pair', 'open_price', 'opened_date', 'close_price', 'closed_date', 'is_closed', 'summary')


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


