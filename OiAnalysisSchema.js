GET /api/v1/oi/get_oi_data
query paramaters:
instrument (string, required): name of the instrument
expiry (string, required): expiry date of the instrument
strike_price (string, required): strike price for the instrument

eg: http://localhost:5002/api/v1/oi/get_oi_data?instrument=BANKNIFTY&expiry=2025-06-27&strike_price=55800

res: {
 "status_code": 200,
    "status": "Success",
    "response_data": {
        "2025-06-05 09:15:00": {
            "ce": {
                "day_high": 997.7,
                "day_low": 939.9,
                "open_price": 950,
                "high_price": 968.45,
                "low_price": 946.05,
                "close_price": 946.05,
                "open_interest": 284130,
                "volume": 360
            },
            "pe": {
                "day_high": 772.8,
                "day_low": 733.1,
                "open_price": 756.45,
                "high_price": 770.2,
                "low_price": 756.45,
                "close_price": 770.2,
                "open_interest": 206340,
                "volume": 150
            }
        },
        "2025-06-05 09:16:00": {
            "ce": {
                "day_high": 997.7,
                "day_low": 938,
                "open_price": 941.85,
                "high_price": 962.45,
                "low_price": 941.85,
                "close_price": 946.4,
                "open_interest": 284130,
                "volume": 1050
            },
            "pe": {
                "day_high": 779,
                "day_low": 733.1,
                "open_price": 767.55,
                "high_price": 773.05,
                "low_price": 748.5,
                "close_price": 773.05,
                "open_interest": 206340,
                "volume": 1290
            }
        },
        "2025-06-05 09:17:00": {
            "ce": {
                "day_high": 997.7,
                "day_low": 891.9,
                "open_price": 940.25,
                "high_price": 940.25,
                "low_price": 900.5,
                "close_price": 900.5,
                "open_interest": 284130,
                "volume": 1440
            },
            "pe": {
                "day_high": 811.8,
                "day_low": 733.1,
                "open_price": 777.85,
                "high_price": 803.3,
                "low_price": 777.85,
                "close_price": 802.8,
                "open_interest": 206340,
                "volume": 1650
            }
        },
   ....
 }
}
