from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    phone = models.CharField(max_length=15, blank=True, null=True)
    image_profile = models.ImageField(upload_to="profile_pics/", blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    id_cakeCoin = models.IntegerField(default=0)

    groups = models.ManyToManyField(
        "auth.Group",
        related_name="custom_user_groups",  # Προσθέτουμε custom related_name για να μην συγκρούεται
        blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="custom_user_permissions",  # Προσθέτουμε custom related_name για να μην συγκρούεται
        blank=True
    )

    def __str__(self):
        return self.username