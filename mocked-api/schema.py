import strawberry
from typing import Iterable
from strawberry import relay
from schema_types.blood_donation_center import BloodDonationCenter
from mocked.mocked_blood_dotation_centers import load_bdc_data


@strawberry.type
class Query:
    node: relay.Node = relay.node()

    @relay.connection(relay.ListConnection[BloodDonationCenter])
    def bloodDonationCenters(self) -> Iterable[BloodDonationCenter]:
        for item in load_bdc_data():
            yield BloodDonationCenter(**item)


schema = strawberry.Schema(query=Query)
