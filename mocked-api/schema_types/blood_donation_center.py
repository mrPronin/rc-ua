import strawberry
import typing
from typing import Optional
from strawberry import relay
from datetime import datetime
from strawberry.types import Info
from typing import Iterable
from schema_types.blood_dotation_center_category import (
    ENUM_BLOODDONATIONCENTER_CATEGORY,
)  # noqa: E501
from schema_types.tag import Tag
from schema_types.address import Address
from schema_types.contacts import Contacts
from schema_types.work_schedule_item import WorkScheduleItem

# from mocked.mocked_blood_dotation_centers import mocked_data


@strawberry.type
class BloodDonationCenter(relay.Node):
    id: relay.NodeID[int]
    name: str
    category: ENUM_BLOODDONATIONCENTER_CATEGORY
    notes: Optional[str]
    tags: typing.List[Tag]
    address: Optional[Address]
    contacts: Optional[Contacts]
    workSchedule: Optional[typing.List[WorkScheduleItem]]
    createdAt: Optional[datetime]
    updatedAt: Optional[datetime]
    publishedAt: Optional[datetime]

    @classmethod
    def resolve_nodes(
        cls,
        *,
        info: Info,
        node_ids: Iterable[str],
        required: bool = False,
    ):
        return []  # mocked_data
