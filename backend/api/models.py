from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Goal(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=300, blank=True, null=True)
    category = models.ForeignKey(
        'Category', related_name='categories', on_delete=models.CASCADE, blank=True, null=True
    )
    user = models.ForeignKey(User, related_name='users_1', on_delete=models.CASCADE, blank=True, null=True)
    deadline = models.DateField()
    createdAt = models.DateTimeField(null=True)
    completed = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Goals'

    def __str__(self):
        return self.title


class Task(models.Model):
    goal = models.ForeignKey('Goal', related_name='tasks', on_delete=models.CASCADE, blank=True, null=True)
    user = models.ForeignKey(User, related_name='users_3', on_delete=models.CASCADE, blank=True, null=True)
    text = models.CharField(max_length=200, default='')
    completed = models.BooleanField(default=False)
    createdAt = models.DateTimeField(null=True)

    def __str__(self):
        return self.text


class Category(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    color = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title


class Reward(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=300, blank=True, null=True)
    points = models.IntegerField(default=0)
    user = models.ForeignKey(User, related_name='users_2',
                             on_delete=models.CASCADE, blank=True, null=True)
    used = models.BooleanField(default=False)
    createdAt = models.DateTimeField(null=True)

    class Meta:
        verbose_name_plural = 'Rewards'

    def __str__(self):
        return self.title
