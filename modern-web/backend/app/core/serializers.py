from django.db.models import fields
from rest_framework import serializers
from .models import Data, PostData

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = [
            'year', 'sale', 'country', 'product',
        ]


class PostDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostData
        fields = [
            'title','body',
        ]