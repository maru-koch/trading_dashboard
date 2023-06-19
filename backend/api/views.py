from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from api.serializers import UserSerializer
from api.utils import Trader
from django.contrib.auth.models import User
# Create your views here.

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes=[]
    authentication_classes=[]

    def get_queryset(self):
        users = User.objects.all()
        if not users.exists():
            users = self.create_users()
        return users
    
    def create_users(self):
        trader = Trader()
        return trader.create_users()