from django.db import models


# Create your models here.


class Goal(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=300)
    category = models.CharField(max_length=50, blank=True, null=True)
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
