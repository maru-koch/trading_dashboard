from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser
from django.conf import settings
from uuid import uuid4

# Create your models here.

class CustomUserManager(BaseUserManager):
    def create(self, email, password=None, **kwargs):
        if email is None:
            raise ValueError('Email cannot be empty')
        if not password:
            raise ValueError('password cannot be empty')
        
        user = self.model(email=self.normalize_email(email), **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **kwargs):
        # if not getattr(kwargs, 'is_staff') or not getattr(kwargs, 'is_admin'):
        #     raise ValueError('A superuser must be a staff and admin')
        
        kwargs['is_staff'] = True
        kwargs['is_admin'] = True
        kwargs['is_superuser'] = True
        kwargs['is_manager'] = True
        kwargs['is_trader'] = True

        user = self.create(email, password, **kwargs)
        user.save()
        return user

class User(AbstractUser):
    id = models.UUIDField(default=uuid4, primary_key=True, unique=True)
    username = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    manager = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.PROTECT, blank=True, null=True)
    is_trader = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_manager = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS =('username', 'first_name', 'last_name')

    objects = CustomUserManager()

    def __str__(self):
        return self.get_full_name()