from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,min_length=8,style={'input_type':'password'},validators=[validate_password]) #one should not see the password by get request so we assign write only here, style={'input_type':'password'} gives *** as we type password in password field,min_length=8 or any number like 9, 10 or anything handles password minimum length(must be 8 chars),validators=[validate_password] checks like contain atleast 1 Uppercase,special chars like that
    class Meta:
        model=User
        fields=['username','email','password']


    # This is for checking email already exists in db 
    def validate_email(self, value):
        """Ensure email is unique."""
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already registered.")
        return value


    def create(self, validated_data):
        # User.objects.create = saves password in plain text
        # User.objects.create_user = automatically hashes the password that why we used create_user
        user=User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )
        # user=User.objects.create_user(**validated_data) we can also use the method too but if have any personal info need to use upper method 
        return user