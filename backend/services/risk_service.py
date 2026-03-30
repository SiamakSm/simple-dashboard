# backend/services/risk_service.py

def compute_risk(usage: float, heart_rate: int | None) -> str:
    score = 0

    # 1. usage
    if usage < 4:
        score += 1

    # 2. heart rate
    if heart_rate and heart_rate > 80:
        score += 1

    # 3. decision
    if score == 0:
        return "low"
    elif score == 1:
        return "medium"
    else:
        return "high"