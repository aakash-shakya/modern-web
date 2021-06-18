import json
from django.db.models import query
from django.db.models.query import QuerySet
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework import permissions

from .models import Data, PostData
from .serializers import DataSerializer, PostDataSerializer

from rest_framework.views import APIView


class DataView(APIView):

    permission_classes = []

    def get(self,request):
        query = Data.objects.all()
        result = DataSerializer(query,many=True)
        return Response(result.data)
       

class PostDataView(APIView):
    permission_classes=[]

    def get(self,request):
        query = PostData.objects.all()
        result=PostDataSerializer(query,many=True)
        return Response(result.data)

    def post(self,request):
        query = PostData.objects.create( title= request.data['title'], body = request.data['body'])
        createposts=DataSerializer(query,many=True)
        return Response(createposts.data)
    
class PostDataDetailView(APIView):
    permission_classes = []

    def get(self,request,id):
        query = get_object_or_404(PostData,id=id)
        result=PostDataSerializer(query)
        return Response(result.data)

    def update(self,request,id):
        query = get_object_or_404(PostData,id=id)
        result = PostDataSerializer(query,data=request.data,partial=True)
        if result.is_valid():
            result.save()
            return Response(result.data)
        return Response("not valid")
