
from django.urls import path, include
from api import views

urlpatterns = [
    path('traders', views.TradersView.as_view(), name="trader"),
    path('traders/<pk>', views.UserDetailView.as_view(), name="user-detail"),
    path('generate-trades', views.GenerateTrades.as_view(), name="generate-trades"),
    path('users/clear', views.ClearUsersView.as_view(), name="clear-users"),
    path('signin', views.LoginView.as_view(), name="sign-in"),
    path('signup', views.SignUp.as_view(), name="sign-up")
]