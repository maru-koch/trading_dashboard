import time
import random
from datetime import datetime
import multiprocessing as mp
from threading import Thread
from dataclasses import dataclass
from django.contrib.auth.models import User
from .models import Trade, Pair, Fund, TradeSummary
from queue import Queue
from decimal import Decimal
import os
import json

@dataclass
class GenerateTrade():
    """ 
    A class that generates a profit and loss trades for the specified user
    @params
    :user: instance of the User model
    """

    day_opened:int=None
    day_closed:int=None

    def generate(self, user, number_of_trades=2) -> None:
        """ Generates for a particular user """
        print('PROCESS FOR  TASK >>:', user)
        if user is not None:
            unit = 1000 # Micro Lot
            pair = Pair(base="usd", quote="eur")

            print("PAIR: ", user)

            while number_of_trades:

                open_price = self.get_price()
                closed_price = self.get_price()
                date_opened = self.get_date()
                date_closed =self.get_date()

                trade = Trade.objects.create(
                                user=user, 
                                pair=pair, 
                                open_price=open_price, 
                                date_opened=date_opened,
                                close_price=closed_price,
                                date_closed=date_closed,
                                is_closed=True
                             )
                
                trade.save()
            
                amount, balance, comment = self.profit_loss(open_price, closed_price, unit)
                
                trade_history= TradeSummary(trade=trade, amount=amount, balance=balance, comment=comment)
                trade_history.save()

    def get_price(self) -> float:
        """ Generates random price between -1 and 2 """
        price = (random.randint(-1, 2) * 0.1) + 0.5
        print("PRICE: ", price)
        return price
    
    def get_date(self, isOpenDate=True) -> datetime:
        """ Generates a random datetime """
        date = datetime.now()

        def day():
            if isOpenDate:
                if not self.day_opened:
                    self.day_opened = date.day
                    return self.day_opened
                elif self.day_opened <= date.day:
                    self.day_opened += + 1
                    if self.day_opened <= 30:
                        return self.day_opened
            else:
                while self.day_opened <= self.day_closed:
                    self.day_closed = random.randrange(self.day_opened, self.day_opened + 2)
                    if self.day_closed > self.day_opened and self.day_closed <= 30:
                        return self.day_closed
        
        date_ = datetime(date.year, date.month, day())
        print("DATE:", date_)
        return date_

    def profit_loss(self, open_price:float, closed_price:float, unit:int, fund) -> tuple([int, int, str]):
        """ Estimates if the trader made profit or loss and the balance at the end of the trade """
        
        global comment 

        price_diff = float(closed_price - open_price)
        percentage_lot = unit/100000

        _returned_amount =  price_diff * 10 * percentage_lot

        print(_returned_amount, price_diff, percentage_lot)

        profit_loss = Decimal.from_float(_returned_amount)

        if _returned_amount <= 0:
            comment = 'loss'
            fund.amount += profit_loss
        else:
            comment = 'profit'
            fund.amount += profit_loss

        balance = fund.amount
        fund.save()
        print("TRADE HISTORY:", round(_returned_amount, 2),  round(balance, 2))
        return round(_returned_amount, 2), round(balance, 2), comment



class Trader:

    user_queue = Queue(20)

    def __init__(self, users:list=[]) -> None:
        pass
    
    def create_users(self):
        """ Creates ten new users if there are no users in the database """

        trades_thread = Thread(target=self.generate_trades)
        trades_thread.start()

        users = self.fetch_users()
        trade = GenerateTrade()

        while len(users) > 0:
            try:
                user = users.pop()
                password = user.pop('password')
                user = User(**user)
                user.set_password(password)
                #self.user_queue.put(user)
                user.save(force_insert=True)
                #size=self.user_queue.qsize()
                #print("Queue Size:", size)
                process = mp.Process(target=trade.generate, args=(user,))
                process.start()
            except Exception as error:
                print(error)

        self.user_queue.put(None)
        
        #: Generate trades for each created user

        #return User.objects.all()
        
    def generate_trades(self):
        """ Generate 10 trades for each user """
        trade = GenerateTrade()
        try:
            while True:
                print("Waiting for Queue")
                user = self.user_queue.get()
                print('Item added', user)
                if user is None:
                    break

                #: Assigning each job to a different worker process
                process = mp.Process(target=trade.generate, args=(user,))
                process.start()
                # trade.generate(user)

        except Exception as error:
            print(error)

    def fetch_users(self):
        """ Gets the users to be created from the json file """

        path_to_utils_py = os.path.dirname(os.path.realpath(__file__))
        json_file_path = os.path.join(path_to_utils_py, 'data', 'users.json')

        with open(json_file_path, 'r') as users_json:
            users = json.load(users_json)

        return users
