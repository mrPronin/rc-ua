import json


def load_bdc_data():
    with open("./mocked/bdc_mock_data.json", "r") as f:
        json_string = json.load(f)
        blood_donation_centers = json_string.get("data").get(
            "bloodDonationCenters"
        )  # noqa: E501
        return blood_donation_centers.get("data")


if __name__ == "__main__":
    bdc_data = load_bdc_data()
