from django.contrib import admin
from .models import Trade, TradeSummary, Fund, Pair
from django.contrib.auth.models import User
# Register your models here.

class TradeAdmin(admin.ModelAdmin):
    list_display = ('trader', 'pair', 'units', 'open_price', 'close_price', 'is_closed')


class SummaryAdmin(admin.ModelAdmin):
    readonly_fields = ('amount', 'balance', 'comment',)
    list_display =('amount', 'balance', 'comment')

admin.site.register(Pair)
admin.site.register(Fund)
admin.site.register(User)
admin.site.register(Trade, TradeAdmin)
admin.site.register(TradeSummary, SummaryAdmin)