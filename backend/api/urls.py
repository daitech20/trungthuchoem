from django.urls import path, include
from .views import UserFacebookView
urlpatterns = [
    path('user/', UserFacebookView.as_view(), name='user_facebook'),
]