from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from blog.views import HistoricalEchoView, ContentsView
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'historical_echo', HistoricalEchoView)
router.register(r'contents',ContentsView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
   
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
