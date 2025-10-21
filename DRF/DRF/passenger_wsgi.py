"""
WSGI config for Karasteh-Drf project.
It exposes the WSGI callable as a module-level variable named ``application``.
"""
import os
import sys
from decouple import Config, RepositoryEnv

# مسیر دایرکتوری اصلی پروژه
PROJECT_DIR = '/home/karasteh/Karasteh-Drf'

# افزودن مسیر پروژه به sys.path
if PROJECT_DIR not in sys.path:
    sys.path.insert(0, PROJECT_DIR)

# تنظیم ماژول تنظیمات جنگو
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

# بارگذاری دستی فایل .env
env_file = os.path.join(PROJECT_DIR, '.env')
if os.path.exists(env_file):
    env_config = Config(RepositoryEnv(env_file))
    os.environ['SECRET_KEY'] = env_config('SECRET_KEY')
    os.environ['DEBUG'] = env_config('DEBUG', cast=str)  # cast به str برای اطمینان
    os.environ['DB_NAME'] = env_config('DB_NAME')
    os.environ['DB_USER'] = env_config('DB_USER')
    os.environ['DB_PASSWORD'] = env_config('DB_PASSWORD')
    os.environ['DB_HOST'] = env_config('DB_HOST')
    os.environ['DB_PORT'] = str(env_config('DB_PORT'))  # تبدیل به رشته
    os.environ['API_KEY'] = env_config('API_KEY')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()