from datetime import datetime
import pytz
import jdatetime

def to_jalali(dt, format_str: str = '%Y-%m-%d %H:%M:%S') -> str:
    """
    تبدیل تاریخ میلادی به جلالی با استفاده از timezone تهران.
    پشتیبانی از رشته‌های تاریخ (فرمت: YYYY-MM-DD HH:MM:SS).
    """
    if isinstance(dt, str):
        try:
            dt = datetime.strptime(dt, '%Y-%m-%d %H:%M:%S')
        except ValueError:
            try:
                dt = datetime.strptime(dt, '%Y-%m-%d')  # پشتیبانی از تاریخ بدون ساعت
            except ValueError:
                raise ValueError("فرمت تاریخ نامعتبر است. از YYYY-MM-DD HH:MM:SS یا YYYY-MM-DD استفاده کنید.")
    elif not isinstance(dt, datetime):
        raise ValueError("ورودی باید از نوع datetime یا رشته تاریخ باشد")

    tehran_tz = pytz.timezone('Asia/Tehran')
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=pytz.UTC)
    dt_tehran = dt.astimezone(tehran_tz)
    jalali_date = jdatetime.datetime.fromgregorian(
        year=dt_tehran.year,
        month=dt_tehran.month,
        day=dt_tehran.day,
        hour=dt_tehran.hour,
        minute=dt_tehran.minute,
        second=dt_tehran.second
    )
    return jalali_date.strftime(format_str)