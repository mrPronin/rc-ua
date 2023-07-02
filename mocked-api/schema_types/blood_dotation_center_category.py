import strawberry
from enum import Enum


@strawberry.enum
class ENUM_BLOODDONATIONCENTER_CATEGORY(Enum):
    STATIONARY = "Stationary"
    MOBILE = "Mobile"
