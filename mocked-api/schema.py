import strawberry
from typing import Iterable
from strawberry import relay
from schema_types.blood_donation_center import BloodDonationCenter
from mocked.mocked_blood_dotation_centers import mocked_data


@strawberry.type
class Query:
    node: relay.Node = relay.node()

    @relay.connection(relay.ListConnection[BloodDonationCenter])
    def bloodDonationCenters(self) -> Iterable[BloodDonationCenter]:
        return mocked_data


schema = strawberry.Schema(query=Query)
