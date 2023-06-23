
from django.urls import path, include
from api import views

urlpatterns = [
    path('users', views.UserView.as_view(), name="users"),
    path('users/<pk>', views.UserDetailView.as_view(), name="user-detail"),
    path('users/clear', views.ClearUsersView.as_view(), name="clear-users"),
    path('signin', views.LoginView.as_view(), name="sign-in"),
    path('signup', views.SignUp.as_view(), name="sign-up")
]