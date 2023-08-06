import json

with open("./mocked/bdc_mock_data.json", "r") as f:
    json_string = json.load(f)

blood_donation_centers = json_string.get("data").get("bloodDonationCenters")
blood_dotation_data = blood_donation_centers.get("data")
