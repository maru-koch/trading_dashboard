from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from api.serializers import UserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from api.account.models import User
from api.tasks import create_users
# Create your views here.

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes=[AllowAny]
    authentication_classes=[]

    def get_queryset(self):
        users = User.objects.all()
        if not users.exists():
            create_users.delay()
        return users
       
    
    
    

    