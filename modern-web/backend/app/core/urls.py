from django.urls import path
from .views import DataView, PostDataView, PostDataDetailView

urlpatterns = [
    path('get/',DataView.as_view()),
    path('posts/',PostDataView.as_view()),
    path('posts/<int:id>/',PostDataDetailView.as_view())
]