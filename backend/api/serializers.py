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
    pair = PairSerializer()
    summary = TradeSummarySerializer()
    class Meta:
        model=Trade
        fields=('id', 'unit', 'pair', 'open_price', 'opened_date', 'close_price', 'closed_date', 'is_closed', 'summary')

class UserSerializer(serializers.ModelSerializer):
    
    trades = TradeSerializer()
    fund = FundSerializer()

    class Meta:
        model=User
        fields=('id', 'username', 'first_name', 'last_name', 'email', 'fund', 'trades')


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