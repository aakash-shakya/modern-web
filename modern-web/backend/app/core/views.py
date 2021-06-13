import json
from django.db.models.query import QuerySet
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework import permissions

from .models import Data
from .serializers import DataSerializer

from rest_framework.views import APIView


class DataView(APIView):

    permission_classes = []

    def get(self,request):
        query = Data.objects.all()
        result = DataSerializer(query,many=True)
        return Response(result.data)
       