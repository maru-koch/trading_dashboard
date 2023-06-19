from django.contrib import admin
from .models import Trade, TradeSummary, Fund, Pair
# Register your models here.

admin.site.register(Pair)
admin.site.register(Fund)
admin.site.register(Trade)
admin.site.register(TradeSummary)