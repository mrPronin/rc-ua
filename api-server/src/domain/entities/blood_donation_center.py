import strawberry
import typing
from typing import Optional
from strawberry import relay
from datetime import datetime
from datetime import time

from domain.enums.blood_dotation_center_category import (
    BloodCenterCategory,
)  # noqa: E501

from domain.value_objects.address import Address
from domain.value_objects.contacts import Contacts
from domain.value_objects.work_schedule_item import WorkScheduleItem
from domain.value_objects.weekday import WeekdayItem


def convert_string_to_time(time_string: Optional[str]) -> Optional[time]:
    """Convert a time string to a datetime.time object."""
    if time_string:
        return datetime.strptime(time_string.split(".")[0], "%H:%M:%S").time()
    return None


@strawberry.type
class BloodDonationCenter(relay.Node):
    attributes: strawberry.Private[object]

    id: relay.NodeID[int]

    # name
    @strawberry.field
    def name(self) -> str:
        return str(self.attributes.get("name"))

    # category
    @strawberry.field
    def category(self) -> BloodCenterCategory:
        return BloodCenterCategory(self.attributes.get("category"))

    # notes
    @strawberry.field
    def notes(self) -> Optional[str]:
        return str(self.attributes.get("notes"))

    # address
    @strawberry.field
    def address(self) -> Optional[Address]:
        return Address(**self.attributes.get("address", {}))

    # contacts
    @strawberry.field
    def contacts(self) -> Optional[Contacts]:
        return Contacts(**self.attributes.get("contacts", {}))

    # workSchedule
    @strawberry.field
    def workSchedule(self) -> Optional[typing.List[WorkScheduleItem]]:
        for item in self.attributes.get("workSchedule"):
            week_day_item = WeekdayItem(
                **item["week_day"].get("data").get("attributes")
            )  # noqa: E501

            yield WorkScheduleItem(
                weekDay=week_day_item,
                startTimeBeforeLunchBreak=convert_string_to_time(
                    item["startTimeBeforeLunchBreak"]
                ),
                endTimeBeforeLunchBreak=convert_string_to_time(
                    item["endTimeBeforeLunchBreak"]
                ),
                startTimeAfterLunchBreak=convert_string_to_time(
                    item["startTimeAfterLunchBreak"]
                ),
                endTimeAfterLunchBreak=convert_string_to_time(
                    item["endTimeAfterLunchBreak"]
                ),
            )

    # createdAt
    @strawberry.field
    def createdAt(self) -> Optional[datetime]:
        return datetime.fromisoformat(self.attributes.get("createdAt"))

    # updatedAt
    @strawberry.field
    def updatedAt(self) -> Optional[datetime]:
        return datetime.fromisoformat(self.attributes.get("updatedAt"))

    # publishedAt
    @strawberry.field
    def publishedAt(self) -> Optional[datetime]:
        return datetime.fromisoformat(self.attributes.get("publishedAt"))
