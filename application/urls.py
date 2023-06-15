from django.urls import path
from .views import ApplicationFormViewSet


urlpatterns = [
    path('application/', ApplicationFormViewSet)
]
