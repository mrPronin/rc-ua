import strawberry


@strawberry.type
class WeekdayItem:
    Name: str
    ShortName: str
    weekDayNumber: int
