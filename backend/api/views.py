from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics, mixins, viewsets
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from .models import Goal, Task, Category, Reward
from .serializers import GoalSerializer, SignupSerializer, UserSerializer, ProfileSerializer, TaskSerializer, CategorySerializer, RewardSerializer

User = get_user_model()

# Create your views here.


class SignupViewSet(viewsets.ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ['post']


class LoginViewSet(viewsets.ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""
    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({'token': token.key, 'user': user_serializer.data})


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)

    def retrieve(self, request, pk=None):
        user = User.objects.filter(pk=pk).first()
        if user:
            serializer = self.serializer_class(user)
        else:
            return Response("Details not found", status.HTTP_400_BAD_REQUEST)
        return Response(serializer.data)


class GoalViewset(viewsets.ModelViewSet):
    serializer_class = GoalSerializer
    permission_classes = [IsAuthenticated]

    queryset = Goal.objects.all()

    def get_queryset(self):
        return Goal.objects.filter(user=self.request.user.id).order_by('-createdAt')

    # def get_queryset(self):
    #     return User.objects.filter(user=self.request.user.id)

    @action(detail=True, methods=['get'])
    def get_tasks(self, request, pk=None):
        g = self.get_object()
        serializer = TaskSerializer(g.tasks.all(), many=True)
        return Response(serializer.data)


class TaskViewset(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    queryset = Task.objects.all()

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user.id).order_by('-createdAt')


class CategoryViewset(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticated]

    queryset = Category.objects.all()


class RewardViewset(viewsets.ModelViewSet):
    serializer_class = RewardSerializer
    permission_classes = [IsAuthenticated]

    queryset = Reward.objects.all()

    def get_queryset(self):
        return Reward.objects.filter(user=self.request.user.id)
