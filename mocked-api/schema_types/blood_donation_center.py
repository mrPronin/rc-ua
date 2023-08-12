import strawberry
import typing
from typing import Optional
from strawberry import relay
from datetime import datetime

from schema_types.blood_dotation_center_category import (
    BloodCenterCategory,
)  # noqa: E501

from schema_types.tag import Tag
from schema_types.address import Address
from schema_types.contacts import Contacts
from schema_types.work_schedule_item import WorkScheduleItem


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

    # tags
    @strawberry.field
    def tags(self) -> Optional[typing.List[Tag]]:
        tag_dicts = self.attributes.get("tags", {}).get("data", [])
        for tag_dict in tag_dicts:
            yield Tag(**tag_dict.get("attributes", {}))

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
            new_item = {
                **item,
                "startTimeBeforeLunchBreak": datetime.strptime(
                    item["startTimeBeforeLunchBreak"], "%H:%M:%S.%f"
                ).time()
                if item["startTimeBeforeLunchBreak"]
                else None,
                "endTimeBeforeLunchBreak": datetime.strptime(
                    item["endTimeBeforeLunchBreak"], "%H:%M:%S.%f"
                ).time()
                if item["endTimeBeforeLunchBreak"]
                else None,
                "startTimeAfterLunchBreak": datetime.strptime(
                    item["startTimeAfterLunchBreak"], "%H:%M:%S.%f"
                ).time()
                if item["startTimeAfterLunchBreak"]
                else None,
                "endTimeAfterLunchBreak": datetime.strptime(
                    item["endTimeAfterLunchBreak"], "%H:%M:%S.%f"
                ).time()
                if item["endTimeAfterLunchBreak"]
                else None,
            }
            yield WorkScheduleItem(**new_item)

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
