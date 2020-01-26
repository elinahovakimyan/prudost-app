from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics, mixins, viewsets
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from .models import Goal
from .serializers import GoalSerializer


# Create your views here.


class GoalViewset(viewsets.ModelViewSet):
  serializer_class = GoalSerializer
  permission_classes = [IsAuthenticated]

  queryset = Goal.objects.all()
