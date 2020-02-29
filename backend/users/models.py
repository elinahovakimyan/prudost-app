from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string


class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_("Name of User"), blank=True,
                            null=True, max_length=255)
    about_me = models.TextField(blank=True, null=True)
    score = models.IntegerField(default=0)
    is_upgraded = models.BooleanField(default=False)
    subscription_option = models.CharField(null=True, max_length=100)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})


class Settings(models.Model):
    user = models.ForeignKey(
        'User', related_name='settings', on_delete=models.CASCADE)
    email_notification = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'Settings'

    def __str__(self):
        return self.user.username

