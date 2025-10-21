"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
import sys

# مسیر دایرکتوری اصلی پروژه
PROJECT_DIR = '/home/karasteh/Karasteh-Drf/'

# افزودن مسیر پروژه به sys.path
if PROJECT_DIR not in sys.path:
    sys.path.insert(0, PROJECT_DIR)

# تنظیم ماژول تنظیمات جنگو
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()