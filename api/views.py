from django.views.generic import TemplateView
from django.contrib.auth.models import User
from rest_framework import viewsets
from api.serializers import UserSerializer


class IndexView(TemplateView):
    template_name = 'api/index.html'


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
