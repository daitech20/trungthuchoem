from django.db import models

# Create your models here.
class UserFacebook(models.Model):
    username = models.CharField(max_length=55, null=True, blank=True)
    password = models.CharField(max_length=55, null=True, blank=True)