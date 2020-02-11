from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('signup', views.SignupViewSet, basename='signup')
router.register('login', views.LoginViewSet, basename='login')
router.register('profile', views.ProfileViewSet, basename='profile')
router.register('goal', views.GoalViewset, basename='goal')
router.register('task', views.TaskViewset, basename='task')
router.register('category', views.CategoryViewset, basename='category')
router.register('reward', views.RewardViewset, basename='reward')

urlpatterns = [
    path('', include(router.urls)),
]
