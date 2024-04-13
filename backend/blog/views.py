
from rest_framework import viewsets
from .serializers import HistoricalEchoSerializer, ContentsSerializer
from .models import HistoricalEcho, Contents

from django.shortcuts import render

def index(request):
    return render(request, "index.html")

class HistoricalEchoView(viewsets.ModelViewSet):
    serializer_class = HistoricalEchoSerializer
    queryset = HistoricalEcho.objects.all()

class ContentsView(viewsets.ModelViewSet):
    serializer_class = ContentsSerializer
    queryset = Contents.objects.all()

        

