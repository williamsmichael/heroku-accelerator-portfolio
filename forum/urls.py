from django.conf.urls import url
from forum import views

urlpatterns = [
    url(r'^$', views.forum, name='forum')
]