from django.urls import path
from .views import DataView

urlpatterns = [
    path('get/',DataView.as_view())
]