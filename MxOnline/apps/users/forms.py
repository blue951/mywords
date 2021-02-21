# -*- coding:utf-8 -*-
__author__ = "fwf"
__date__ = "2021/2/21 15:39"
from django import forms


class LoginForm(forms.Form):
    username = forms.CharField(required=True)
    password = forms.CharField(required=True, min_length=5)
