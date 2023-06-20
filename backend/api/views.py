from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from api.serializers import UserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from api.utils import Trader
from api.account.models import User
from django.db.utils import DatabaseError
# Create your views here.

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes=[AllowAny]
    authentication_classes=[]

    def get_queryset(self):
        # try:
            #if not users.exists():
            # new_users = self.create_users()
           
            # for user in new_users:
            #     print("USER:", user)
            #     user.save()
        return User.objects.all()
        # except DatabaseError as err:
        #     print(err)
    
    def create_users(self):
        trader = Trader()
        return trader.create_users()
    

    