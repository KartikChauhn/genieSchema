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

  {
    "status_code": 200,
    "status": "Success",
    "response_data": {
        "previous_day": {
            "2025-06-17 15:29:00": {
                "ce": {
                    "day_high": 384.65,
                    "day_low": 273.5,
                    "open_price": 282.85,
                    "high_price": 285.75,
                    "low_price": 282.85,
                    "close_price": 285.75,
                    "open_interest": 188625,
                    "volume": 3450
                }
            }
        },
        "current_day": {
            "2025-06-18 09:15:00": {
                "ce": {
                    "day_high": 269.05,
                    "day_low": 256,
                    "open_price": 285.75,
                    "high_price": 285.75,
                    "low_price": 256,
                    "close_price": 259.8,
                    "open_interest": 188925,
                    "volume": 3750
                },
                "pe": {
                    "day_high": 188.05,
                    "day_low": 172.75,
                    "open_price": 173,
                    "high_price": 186.85,
                    "low_price": 173,
                    "close_price": 176,
                    "open_interest": 428100,
                    "volume": 3075
                }
            },
            "2025-06-18 09:16:00": {
                "ce": {
                    "day_high": 272.95,
                    "day_low": 256,
                    "open_price": 258.4,
                    "high_price": 272.65,
                    "low_price": 256.35,
                    "close_price": 266.5,
                    "open_interest": 188925,
                    "volume": 5175
                },
                "pe": {
                    "day_high": 188.05,
                    "day_low": 167.7,
                    "open_price": 175.7,
                    "high_price": 176.6,
                    "low_price": 168,
                    "close_price": 170.2,
                    "open_interest": 428100,
                    "volume": 3600
                }
            },
         ....
    }
 }
}
