import os
import json
import random
from decimal import Decimal
from datetime import datetime
from celery import shared_task, Task, group
from dataclasses import dataclass
from .models import Trade, Pair, Fund, TradeSummary
from api.account.models import User


day_opened:int=None
day_closed:int=None

@shared_task
def create_users():
    """ Creates ten new users if there are no users in the database """
    print("CREATING USER")
    path_to_utils_py = os.path.dirname(os.path.realpath(__file__))
    json_file_path = os.path.join(path_to_utils_py, 'data', 'users.json')

    with open(json_file_path, 'r') as users_json:
        users = json.load(users_json)
        print(users)

    # trades = group(generate_user_trades(user) for user in users)
    # trades.apply_async()

    for user in users:
        generate_user_trades(user)

    return 'Trades sucessfully generated'

def create_trades(user, pair, units, fund):

    open_price = get_price()
    closed_price = get_price()
    date_opened = get_date()
    date_closed = get_date()

    trade = Trade.objects.create(
                    trader=user, 
                    units=units,
                    pair=pair, 
                    open_price=open_price, 
                    date_opened=date_opened,
                    close_price=closed_price,
                    date_closed=date_closed,
                    is_closed=True
                    )
    trade.save()
    amount, balance, comment = profit_loss(open_price, closed_price, units, fund)
    trade_history= TradeSummary(trade=trade, amount=amount, balance=balance, comment=comment)
    trade_history.save()

def generate_user_trades(user, number_of_trades=10) -> None:
    """ Generates for a particular user """
   
    if user is not None:
        password = user.pop('password')
        user = User(**user)
        user.set_password(password)
        user.save(force_insert=True)
        fund = Fund.objects.create(user=user, amount=100, currency="usd")
        units = 1000 # Micro Lot
        pair = Pair(base="usd", quote="eur")
        pair.save()
        # trades = group((create_trades(user, pair, units, fund)) for _ in range(number_of_trades))
        # trades.apply_async()

        for _ in range(number_of_trades):
            create_trades(user, pair, units, fund)

def get_price() -> float:
    """ Generates random price between -1 and 2 """
    #price = (random.randint(-1, 2) * 0.1) + 0.5
    price = (random.randint(-1, 2))
    return price
    
def get_date(isOpenDate=True) -> datetime:
    """ Generates a random datetime """
    date = datetime.now()

    def day():

        global day_closed
        global day_opened

        if isOpenDate:
            if not day_opened:
                day_opened = date.day
                return date.day
            elif day_opened <= date.day:
                day_opened += + 1
                if day_opened <= 30:
                    return day_opened
                else:
                    return day_opened - 2
        else:
            while day_opened <= day_closed:
                day_closed = random.randrange(day_opened, day_opened + 2)
                if day_closed > day_opened and day_closed <= 30:
                    return day_closed
    day_ = day()
    if day_==None:
        day_= date.day
    date_ = datetime(date.year, date.month, day_)
    return date_

def profit_loss(open_price:float, closed_price:float, unit:int, fund) -> tuple([int, int, str]):
    """ Estimates if the trader made profit or loss and the balance at the end of the trade """
    
    global comment 

    price_diff = float(closed_price - open_price)

    percentage_lot = unit/100000

    _returned_amount =  (price_diff * 10 * percentage_lot) * float(fund.amount)

    print(_returned_amount, type(_returned_amount))

    profit_loss = Decimal.from_float(_returned_amount)

    if _returned_amount <= 0:
        comment = 'loss'
        fund.amount += profit_loss
    else:
        comment = 'profit'
        fund.amount += profit_loss

    balance = fund.amount
    fund.save()
    return round(_returned_amount, 2), round(balance, 2), comment