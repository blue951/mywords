# -*- coding:utf-8 -*-
__author__ = "fwf"
__date__ = "2021/2/21 19:19"

from random import Random

from users.models import EmailVerifyRecord
from django.core.mail import send_mail


def send_register_email(email, send_type="register"):
    email_record = EmailVerifyRecord()
    email_record.code = random_str(16)
    email_record.email = email
    email_record.send_type = send_type
    email_record.save()

    email_title = ""
    email_body = ""

    if send_type == "register":
        email_title = "注册激活链接"
        email_body = "请点击下面的链接激活你的账号：http://127.0.0.1:8000/active/{0}".format(email_record.code)


def random_str(randomlength=8):
    str = ''
    chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    length = len(chars) - 1
    random = Random()
    for i in range(randomlength):
        str += chars[random.randint(0, length)]
    return str