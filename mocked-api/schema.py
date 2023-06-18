import typing
import strawberry
from enum import Enum
from typing import Optional, Iterable
from datetime import time, datetime
from strawberry import relay
from strawberry.types import Info


@strawberry.enum
class ENUM_BLOODDONATIONCENTER_CATEGORY(Enum):
    STATIONARY = "Stationary"
    MOBILE = "Mobile"


@strawberry.enum
class ENUM_WEEKDAY(Enum):
    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"
    SATURDAY = "Saturday"
    SUNDAY = "Sunday"


@strawberry.type
class Tag:
    name: str


@strawberry.type
class Address:
    id: strawberry.ID
    country: str
    region: Optional[str]
    city: str
    postalCode: str
    street: str
    latitude: Optional[float]
    longitude: Optional[float]


@strawberry.type
class Contacts:
    id: strawberry.ID
    cellPhone: Optional[str]
    landlinePhone: Optional[str]
    email: Optional[str]
    website: Optional[str]


@strawberry.type
class WorkScheduleItem:
    id: strawberry.ID
    weekDay: ENUM_WEEKDAY
    startTimeBeforeLunchBreak: Optional[time]
    endTimeBeforeLunchBreak: Optional[time]
    startTimeAfterLunchBreak: Optional[time]
    endTimeAfterLunchBreak: Optional[time]


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
        return []


@strawberry.type
class BloodDonationCenterConnection(relay.ListConnection[BloodDonationCenter]):
    pass


@strawberry.type
class Query:
    node: relay.Node = relay.node()

    @relay.connection(relay.ListConnection[BloodDonationCenter])
    def bloodDonationCenters(self) -> Iterable[BloodDonationCenter]:
        return []


schema = strawberry.Schema(query=Query)
