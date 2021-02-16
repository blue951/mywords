# -*- coding:utf-8 -*-

from django.shortcuts import render

# Create your views here.
from .models import UserMessage


def getform(request):
    all_messages = UserMessage.objects.all()
    for message in all_messages:
        print(message.name)
    return render(request, 'myform.html')
