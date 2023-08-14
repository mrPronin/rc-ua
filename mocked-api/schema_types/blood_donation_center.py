import strawberry
import typing
from typing import Optional
from strawberry import relay
from datetime import datetime
from datetime import time

from schema_types.blood_dotation_center_category import (
    BloodCenterCategory,
)  # noqa: E501

from schema_types.address import Address
from schema_types.contacts import Contacts
from schema_types.work_schedule_item import WorkScheduleItem


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
            yield WorkScheduleItem(
                weekDay=item["weekDay"],
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
