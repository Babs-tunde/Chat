from django.urls import path
# from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('<str:room>/', views.room, name="room"),
    path('checkroom', views.check_room, name="checkroom"),
    path('send', views.send_message, name="send"),
    path('getMessages/<str:room>/', views.Messages, name="getMessages"),
    # path('login/', views.login, name='login'),
    # path('logout/', views.logout_view, name='logout'),
    # path('signup/', views.signup_view, name='signup'),
    # path('accounts/login/', auth_views.login, name='login'),

]