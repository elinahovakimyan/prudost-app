from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
# router.register('signup', views.SignupViewSet, basename='signup')
# router.register('login', views.LoginViewSet, basename='login')
router.register('goal', views.GoalViewset, basename='goal')

urlpatterns = [
    path('', include(router.urls)),
]
