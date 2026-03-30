# backend/data/patient.py

patients = [
    {
        "id": 11,
        "age": 57,
        "status": "adherent",
        "usage": 6.2,
        "usageHistory": [
            {"day": "Mon", "usage": 5},
            {"day": "Tue", "usage": 6},
            {"day": "Wed", "usage": 4},
        ],
        "risk": 0.7,
    },
    {
        "id": 22,
        "age": 63,
        "usage": 5.8,
        "status": "non-adherent",
        "risk": 1.5,
    },
    {
        "id": 3,
        "age": 49,
        "status": "adherent",
        "usage": 7.1,
        "usageHistory": [
            {"day": "Mon", "usage": 2},
            {"day": "Tue", "usage": 6},
            {"day": "Wed", "usage": 8},
        ],
    },
]