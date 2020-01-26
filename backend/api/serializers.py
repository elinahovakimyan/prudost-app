
from django.http import HttpRequest
from rest_framework import serializers
from .models import Goal


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ['id', 'title', 'description', 'deadline']
        # fields = '__all__'
