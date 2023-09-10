import strawberry
from typing import Optional


@strawberry.type
class Address:
    country: str
    region: Optional[str]
    city: str
    postalCode: str
    street: str
    latitude: Optional[float]
    longitude: Optional[float]
