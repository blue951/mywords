# -*- encoding:utf-8 -*-

from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser

class UserProfile(AbstractUser):
    nick_name = models.CharField(max_length=50, verbose_name=u"昵称", default="")
    birthday = models.DateTimeField(verbose_name=u"生日", null=True, blank=True)
    gender = models.CharField(max_length=7, choices=(("male", u"男"), ("female", "女")), default="female")
    address = models.CharField(max_length=100, default=u"")
    mobile = models.CharField(max_length=11, null=True, blank=True)
    image = models.ImageField(upload_to="image/%Y/%m", default=u"image/default.png", max_length=100)

    class Meta:
        verbose_name = "用户信息"
        verbose_name_plural = verbose_name

    def __unicode__(self):
        return self.username
