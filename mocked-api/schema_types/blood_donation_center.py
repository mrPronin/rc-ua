import strawberry
import typing
from typing import Optional
from strawberry import relay
from datetime import datetime
from strawberry.types import Info
from typing import Iterable
from schema_types.blood_dotation_center_category import (
    BloodCenterCategory,
)  # noqa: E501

# from schema_types.tag import Tag
# from schema_types.address import Address
# from schema_types.contacts import Contacts
from schema_types.work_schedule_item import WorkScheduleItem

# from mocked.mocked_blood_dotation_centers import mocked_data


@strawberry.type
class BloodDonationCenter(relay.Node):
    attributes: strawberry.Private[object]

    id: relay.NodeID[int]
    # tags: typing.List[Tag]
    # address: Optional[Address]
    # contacts: Optional[Contacts]

    @strawberry.field
    def name(self) -> str:
        return str(self.attributes.get("name"))

    @strawberry.field
    def notes(self) -> str:
        return str(self.attributes.get("notes"))

    @strawberry.field
    def category(self) -> BloodCenterCategory:
        return BloodCenterCategory(self.attributes.get("category"))

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

    @strawberry.field
    def createdAt(self) -> Optional[datetime]:
        return datetime.fromisoformat(self.attributes.get("createdAt"))

    @strawberry.field
    def updatedAt(self) -> Optional[datetime]:
        return datetime.fromisoformat(self.attributes.get("updatedAt"))

    @strawberry.field
    def publishedAt(self) -> Optional[datetime]:
        return datetime.fromisoformat(self.attributes.get("publishedAt"))

    @classmethod
    def resolve_nodes(
        cls,
        *,
        info: Info,
        node_ids: Iterable[str],
        required: bool = False,
    ):
        return []  # mocked_data
