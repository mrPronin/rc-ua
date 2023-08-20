import strawberry
from schema_types.weekday import WeekdayItem
from typing import Optional
from datetime import time


@strawberry.type
class WorkScheduleItem:
    weekDay: WeekdayItem
    startTimeBeforeLunchBreak: Optional[time]
    endTimeBeforeLunchBreak: Optional[time]
    startTimeAfterLunchBreak: Optional[time]
    endTimeAfterLunchBreak: Optional[time]
