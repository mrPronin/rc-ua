import strawberry
from schema_types.weekday import ENUM_WEEKDAY
from typing import Optional
from datetime import time


@strawberry.type
class WorkScheduleItem:
    id: strawberry.ID
    weekDay: ENUM_WEEKDAY
    startTimeBeforeLunchBreak: Optional[time]
    endTimeBeforeLunchBreak: Optional[time]
    startTimeAfterLunchBreak: Optional[time]
    endTimeAfterLunchBreak: Optional[time]
