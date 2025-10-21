from functools import wraps
from django.http import JsonResponse
from rest_framework import status
from decouple import config

API_KEY = config('API_KEY')

def require_api_key(view_func):
    @wraps(view_func)
    def decorated_func(self, request, *args, **kwargs):
        provided_key = request.META.get('HTTP_X_API_KEY') or request.GET.get('api_key')
        
        if not provided_key:
            return JsonResponse({
                'status': 'error',
                'message': 'کلید API ارائه نشده است'
            }, status=status.HTTP_401_UNAUTHORIZED)
            
        if provided_key != API_KEY:
            return JsonResponse({
                'status': 'error',
                'message': 'کلید API نامعتبر است'
            }, status=status.HTTP_401_UNAUTHORIZED)
            
        return view_func(self, request, *args, **kwargs)
    
    return decorated_func