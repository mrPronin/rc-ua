mocked_data = []

"""
import strawberry
from datetime import datetime, time
from strawberry import relay
from schema_types.blood_dotation_center_category import (
    ENUM_BLOODDONATIONCENTER_CATEGORY,
)  # noqa: E501
from schema_types.weekday import ENUM_WEEKDAY
from schema_types.tag import Tag
from schema_types.address import Address
from schema_types.contacts import Contacts
from schema_types.work_schedule_item import WorkScheduleItem
from schema_types.blood_donation_center import BloodDonationCenter

mocked_data = [
    BloodDonationCenter(
        id=relay.NodeID("1"),
        name="Волинський обласний центр крові",
        category=ENUM_BLOODDONATIONCENTER_CATEGORY.STATIONARY,
        notes='Комунальне некомерційне підприємство "Волинський обласний центр служби крові" Волинської обласної заготовляє цільну кров, плазму і тромбоцитну масу.',  # noqa: E501
        tags=[Tag(name="Tag 1")],
        address=Address(
            country="Україна",
            region="Волинська",
            city="Луцьк",
            postalCode="43010",
            street="про. Волі, 47",
            latitude=None,
            longitude=None,
        ),
        contacts=Contacts(
            cellPhone=None,
            landlinePhone="+38 (0332) 75-75-24",
            email=None,
            website="https://opendatabot.ua/c/01982867",
        ),
        workSchedule=[
            WorkScheduleItem(
                id=strawberry.ID("1"),
                weekDay=ENUM_WEEKDAY.MONDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=None,
                startTimeAfterLunchBreak=None,
                endTimeAfterLunchBreak=time(14, 0),
            ),
            WorkScheduleItem(
                id=strawberry.ID("3"),
                weekDay=ENUM_WEEKDAY.TUESDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=None,
                startTimeAfterLunchBreak=None,
                endTimeAfterLunchBreak=time(14, 0),
            ),
            WorkScheduleItem(
                id=strawberry.ID("2"),
                weekDay=ENUM_WEEKDAY.WEDNESDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=time(13, 0),
                startTimeAfterLunchBreak=time(14, 0),
                endTimeAfterLunchBreak=time(17, 0),
            ),
            WorkScheduleItem(
                id=strawberry.ID("4"),
                weekDay=ENUM_WEEKDAY.THURSDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=None,
                startTimeAfterLunchBreak=None,
                endTimeAfterLunchBreak=time(14, 0),
            ),
            WorkScheduleItem(
                id=strawberry.ID("5"),
                weekDay=ENUM_WEEKDAY.FRIDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=None,
                startTimeAfterLunchBreak=None,
                endTimeAfterLunchBreak=time(14, 0),
            ),
        ],
        createdAt=datetime(2023, 6, 18, 16, 45, 23, 645),
        updatedAt=datetime(2023, 6, 19, 19, 21, 55, 962),
        publishedAt=datetime(2023, 6, 18, 16, 45, 52, 164),
    ),
    BloodDonationCenter(
        id=relay.NodeID("2"),
        name="Володимир-Волинська міська станція переливання крові",
        category=ENUM_BLOODDONATIONCENTER_CATEGORY.STATIONARY,
        notes="Володимир-Волинська міська станція переливання крові приймає донорів з вагою не менше 55 кг.",  # noqa: E501
        tags=[Tag(name="Tag 2")],
        address=Address(
            country="Україна",
            region="Волинська",
            city="Володимир-Волинський",
            postalCode="44700",
            street="вул. Северина Наливайка, 18",
            latitude=None,
            longitude=None,
        ),
        contacts=Contacts(
            cellPhone=None,
            landlinePhone="+380 (33) 423-85-93",
            email="vrcb.vin@gmail.com",
            website="https://facebook.com/donorvn",
        ),
        workSchedule=[
            WorkScheduleItem(
                id=strawberry.ID("6"),
                weekDay=ENUM_WEEKDAY.MONDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=None,
                startTimeAfterLunchBreak=None,
                endTimeAfterLunchBreak=time(14, 0),
            ),
            WorkScheduleItem(
                id=strawberry.ID("8"),
                weekDay=ENUM_WEEKDAY.TUESDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=None,
                startTimeAfterLunchBreak=None,
                endTimeAfterLunchBreak=time(14, 0),
            ),
            WorkScheduleItem(
                id=strawberry.ID("7"),
                weekDay=ENUM_WEEKDAY.WEDNESDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=time(13, 0),
                startTimeAfterLunchBreak=time(14, 0),
                endTimeAfterLunchBreak=time(17, 0),
            ),
            WorkScheduleItem(
                id=strawberry.ID("9"),
                weekDay=ENUM_WEEKDAY.THURSDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=None,
                startTimeAfterLunchBreak=None,
                endTimeAfterLunchBreak=time(14, 0),
            ),
            WorkScheduleItem(
                id=strawberry.ID("10"),
                weekDay=ENUM_WEEKDAY.FRIDAY,
                startTimeBeforeLunchBreak=time(8, 0),
                endTimeBeforeLunchBreak=None,
                startTimeAfterLunchBreak=None,
                endTimeAfterLunchBreak=time(14, 0),
            ),
        ],
        createdAt=datetime(2023, 6, 18, 16, 52, 3, 351),
        updatedAt=datetime(2023, 6, 19, 19, 22, 24, 515),
        publishedAt=datetime(2023, 6, 18, 16, 52, 4, 503),
    ),
]
"""
