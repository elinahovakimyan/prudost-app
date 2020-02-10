from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Goal(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=300)
    category = models.ForeignKey(
        'Category', related_name='categories', on_delete=models.CASCADE, blank=True, null=True
    )
    user = models.ForeignKey(User, related_name='users', on_delete=models.CASCADE, blank=True, null=True)
    deadline = models.DateField()
    completed = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Goals'

    def __str__(self):
        return self.title


class Task(models.Model):
    goal = models.ForeignKey('Goal', related_name='tasks', on_delete=models.CASCADE, blank=True, null=True)
    text = models.CharField(max_length=200, default='')
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.text


class Category(models.Model):
    title = models.CharField(max_length=50, blank=True, null=True)
    color = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.title
