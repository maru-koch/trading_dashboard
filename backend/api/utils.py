import time
import random
from datetime import datetime
from multiprocessing import Process
from dataclasses import dataclass
from django.contrib.auth.models import User
from .models import Trade, Pair, Fund, History
from queue import Queue
from .data import usersJson
import json


@dataclass
class GenerateTrade():
    """ 
    A class that generates a profit and loss trades for the specified user
    @params
    :user: instance of the User model
    """
    user:User=None
    day_opened:int=None
    day_closed:int=None

    def generate(self, number_of_trades=10) -> None:
        """ Generates for a particular user """

        if self.user is not None:
            unit = 1000 # Micro Lot
            pair = Pair(base="usd", quote="eur")

            while number_of_trades:

                open_price = self.get_price()
                closed_price = self.get_price()
                date_opened = self.get_date()
                date_closed =self.get_date()

                trade = Trade(
                                user=self.user, 
                                pair=pair, 
                                open_price=open_price, 
                                date_opened=date_opened,
                                closed_price=closed_price,
                                date_closed=date_closed,
                                is_closed=True
                             )
                
                trade.save()

                amount, balance, comment = self.profit_loss(open_price, closed_price, unit)
                trade_history= History(trade=trade, amount=amount, balance=balance, comment=comment)
                trade_history.save()

                time.sleep(0.3)

    def get_price(self) -> float:
        """ Generates random price between -1 and 2 """
        price = (random.randint(-1, 2) * 0.1) + 1
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
                    self.day_opened += date.day + 1
                    return self.day_opened
            else:
                while self.day_opened <= self.day_closed:
                    self.day_closed = random.randrange(self.day_opened, self.day_opened + 2)
                return self.day_closed
        
        date_ = datetime(date.year, date.month, day())

        return date_

    def profit_loss(self, open_price:float, closed_price:float, unit:int) -> tuple(int, int, str):
        """ Estimates if the trader made profit or loss and the balance at the end of the trade """
        
        global comment 
        _returned_amount = (open_price - closed_price) * 10 * (unit/100000)
        fund = Fund.objects.get(user=self.user)
        if _returned_amount <= 0:
            comment = 'loss'
            fund.amount -= _returned_amount
        else:
            comment = 'profit'
            fund.amount += _returned_amount
        balance = fund.amount
        return _returned_amount, balance, comment


class UserTrades:

    user_queue = Queue(20)

    def __init__(self, users:list=[]) -> None:
        self.users = User.objects.all()
    
    def create_users(self):
        """ Creates ten new users if there are no users in the database """

        if not self.users.exists():
            users = json.load(usersJson)
            for user in users:
                user = User(*user)
                user.save()
                self.user_queue.put(user)
            self.user_queue.put(None)

    def generate_trades(self):
        """ Generate 10 trades for each user """
        
        while True:
            user = self.user_queue.get()
            if user is None:
                break
            trade = GenerateTrade(user=user)
            process = Process(target=trade.generate)
            process.start()
            process.join()

