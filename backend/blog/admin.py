from django.contrib import admin
from .models import HistoricalEcho, Contents

class ContentsInline(admin.TabularInline):
    model = Contents
    extra = 1

class HistoricalEchoAdmin(admin.ModelAdmin):
    inlines = [ContentsInline]

admin.site.register(HistoricalEcho, HistoricalEchoAdmin)
