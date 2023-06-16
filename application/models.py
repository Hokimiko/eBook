from django.db import models


class ApplicationForm(models.Model):
    img = models.ImageField(upload_to='images/', blank=True, null=True)
    description = models.CharField(max_length=1000)
    gps = models.CharField(blank=True, null=True)
    application_status = models.BooleanField(default=False)
