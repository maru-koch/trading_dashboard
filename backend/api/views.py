
# DJANGO
from django.shortcuts import render

# DJANGO REST FRAMEWORK
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token

# API
from api.serializers import UserSerializer
from api.account.models import User
from api.tasks import create_users
# Create your views here.

class UserView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserDetailView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class GenerateUserTrades(APIView):
    def get(self, request):
        users = User.objects.all()
        if not users.exists():
            create_users()
        return users()
    
class ClearUsersView(APIView):
    def get(self, request):
        users = User.objects.all()
        if users.exists():
            users.delete()

class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        user_serializer = UserSerializer(user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token':token.key, 'user': user_serializer.data}, status=status.HTTP_200_OK)


class SignUp(APIView):
 
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'message':'user created sucessfully', 'user':serializer.data}, status=status.HTTP_201_CREATED)
    
    
    
    

    