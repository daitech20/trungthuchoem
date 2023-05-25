from .models import UserFacebook
from rest_framework import serializers


class UserFacebookSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFacebook
        fields = '__all__'