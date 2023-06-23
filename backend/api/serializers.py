from rest_framework import serializers
from api.account.models import User
from .models import Trade, Fund, Pair, TradeSummary


class PairSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pair
        fields=('base', 'quote')

class FundSerializer(serializers.ModelSerializer):
    class Meta:
        model=Fund
        fields=('amount', 'currency')


class TradeSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model=TradeSummary
        fields=('amount', 'balance', 'comment')

class TradeSerializer(serializers.ModelSerializer):

    """ 
    Serializes the Trade model. accesses trade
    summary models through the related names
    
    """
    pair = Pair()
    summary = TradeSummarySerializer(read_only=True)

    class Meta:
        model=Trade
        fields=('id', 'units', 'pair', 'open_price', 'date_opened', 'close_price', 'date_closed', 'is_closed', 'summary')
        dept=2

class UserSerializer(serializers.ModelSerializer):
    
    """ 
    Serializes the User model. accesses the trade 
    and fund models through the related names
    """

    trades = TradeSerializer(many=True)
    fund = FundSerializer()

    class Meta:
        model=User
        fields=('id', 'username', 'first_name', 'last_name', 'password', 'email', 'is_trader', 'fund', 'trades')
        dept=2

    def create(self, validated_data):

        fund = validated_data.pop('fund')
        trades=validated_data.pop('trades')
        username = validated_data['username']
        first_name = validated_data['first_name']
        last_name = validated_data['last_name']
        email= validated_data['email']
        password = validated_data['password']
        is_trader = validated_data['is_trader']

        user = User.objects.create(
            username=username, 
            email=email, 
            password=password, 
            first_name=first_name,
            last_name=last_name,
            is_trader=is_trader
            )
        
        user.save()
        return user


