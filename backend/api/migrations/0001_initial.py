# Generated by Django 4.1.9 on 2023-06-19 22:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Pair',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('base', models.CharField(max_length=255)),
                ('quote', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Trade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('units', models.IntegerField(default=1000)),
                ('open_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=100)),
                ('date_opened', models.DateTimeField(auto_now_add=True)),
                ('close_price', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=100)),
                ('date_closed', models.DateTimeField(auto_now=True)),
                ('is_closed', models.BooleanField(default=False)),
                ('pair', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trades', to='api.pair')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trades', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TradeSummary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField(blank=True, default=0.0)),
                ('balance', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=7)),
                ('comment', models.CharField(blank=True, default='loss', max_length=200)),
                ('trade', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='summary', to='api.trade')),
            ],
        ),
        migrations.CreateModel(
            name='Fund',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=6)),
                ('currency', models.CharField(choices=[('usd', 'USD'), ('ngn', 'NGN')], default='usd', max_length=255)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='fund', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
