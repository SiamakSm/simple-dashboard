# backend/services/risk_service.py

def compute_risk(usage: float) -> str:
    # simple AI simulation logic
    if usage < 4:
        return "highh"
    elif usage < 6:
        return "mediumm"
    else:
        return "loww"