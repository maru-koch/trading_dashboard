# Generated by Django 4.1.9 on 2023-06-19 16:59

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='trade',
            name='id',
            field=models.UUIDField(default=uuid.UUID('befa99b2-8c3e-4dc8-b569-0bc00a50e9a5'), primary_key=True, serialize=False, unique=True),
        ),
    ]
