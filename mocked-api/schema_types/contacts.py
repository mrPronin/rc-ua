import strawberry
from typing import Optional


@strawberry.type
class Contacts:
    cellPhone: Optional[str]
    landlinePhone: Optional[str]
    email: Optional[str]
    website: Optional[str]
