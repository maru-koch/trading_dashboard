
# DJANGO IMPORTS
from django.shortcuts import render

# DJANGO REST FRAMEWORK IMPORTS
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token

# CELERY IMPORTS 
from celery.result import AsyncResult
from celery import apps
from backend.celery import app as celery_app

# API APP
from api.serializers import UserSerializer
from api.account.models import User
from api.tasks import create_users


class TradersView(ListAPIView):
    """ Retrieves list of all registered Users """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserDetailView(RetrieveUpdateDestroyAPIView):
    """ Retrieves the detail of a user """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class GenerateTrades(APIView):
    """ Initiates the celery task of creating traders and populating trading history """

    def get(self, request):
        task = create_users.delay()
        return Response({'msg':'generating task', 'celery_task_id':task.id})

class CheckTaskStatus(APIView):
    """ Checks the status of the celery task at interval """

    def get(self, request):
        task_id = request.query_params.get('task_id')
        result = celery_app.AsyncResult(task_id)
        return Response({'status':result.status})

    # result = MyTask.AsyncResult(task_id)
    # result.get()
class ClearUsersView(APIView):
    """ Clears the database """
    def get(self, request):
        users = User.objects.all()
        if users.exists():
            users.delete()

class LoginView(ObtainAuthToken):
    """ Logins in user and returns user token """

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        user_serializer = UserSerializer(user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token':token.key, 'user': user_serializer.data}, status=status.HTTP_200_OK)


class SignUp(APIView):
    """ Registers a new user """
    def post(self, request):
        data = request.data
        serializer = UserSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'message':'user created sucessfully', 'user':serializer.data}, status=status.HTTP_201_CREATED)
    
    
    
    

    