
from rest_framework import serializers

from blog.models import HistoricalEcho ,Contents

class HistoricalEchoSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoricalEcho
        fields = ('_id', 'title', 'description','created_at', 'cover')

class ContentsSerializer(serializers.ModelSerializer):
    historical_echo = HistoricalEchoSerializer(read_only=True)

    class Meta:
        model = Contents
        fields = ('_id','label', 'value', 'historical_echo')
