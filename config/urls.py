from django.conf.urls import url, include
from django.contrib.auth.models import User
from django.contrib import admin
from rest_framework import routers, serializers, viewsets

from api.views import IndexView


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # AngularUrl
    url(r'^', IndexView.as_view(), name='index_api'),
]
