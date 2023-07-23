import strawberry
from enum import Enum


@strawberry.enum
class BloodCenterCategory(Enum):
    STATIONARY = "Stationary"
    MOBILE = "Mobile"
