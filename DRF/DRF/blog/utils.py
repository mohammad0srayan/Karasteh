from datetime import datetime
import pytz
from jdatetime import datetime as jdatetime

def get_relative_time(dt: datetime, timezone: str = 'Asia/Tehran') -> str:
    """
    تبدیل تاریخ به فرمت نسبی (مثل 'x دقیقه پیش') یا تاریخ جلالی (مثل '1404/10/05')
    برای استفاده در کل پروژه.
    
    Args:
        dt: شیء datetime
        timezone: منطقه زمانی (پیش‌فرض: Asia/Tehran)
    
    Returns:
        str: زمان نسبی یا تاریخ جلالی
    """
    now = datetime.now(pytz.timezone(timezone))
    dt = dt.astimezone(pytz.timezone(timezone))
    diff = now - dt

    if diff.days == 0:
        minutes = diff.seconds // 60
        if minutes < 60:
            return f"{minutes} دقیقه پیش"
        hours = minutes // 60
        if hours < 24:
            return f"{hours} ساعت پیش"
    elif diff.days <= 7:
        return f"{diff.days} روز پیش"
    elif diff.days <= 30:
        weeks = diff.days // 7
        return f"{weeks} هفته پیش"
    else:
        j_date = jdatetime.fromgregorian(datetime=dt)
        return j_date.strftime("%Y/%m/%d")