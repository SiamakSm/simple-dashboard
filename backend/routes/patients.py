# backend/routes/patients.py

from fastapi import APIRouter , HTTPException
from data.patient import patients
from data.biomarker import biomarkers
from services.risk_service import compute_risk


router = APIRouter()


# get patients
@router.get("/patients")
def get_patients():
    return patients



# get patient by id
@router.get("/patient/{id}")
def get_patient(id: int):
    for p in patients:
        if p["id"] == id:
            return p
    raise HTTPException(status_code=404, detail="Patient not found")



# get biomarkers
@router.get("/biomarkers")
def get_biomarkers():
    return biomarkers



# get biomarker by id
@router.get("/biomarker/{id}")
def get_biomarker(id: int):
    biomarker = biomarkers.get(id)
    if not biomarker:
        raise HTTPException(status_code=404, detail="Biomarker not found")
    return biomarker



# get risk (simulation IA)
@router.get("/patient/{id}/risk")
def get_risk(id: int):
    for p in patients:
        if p["id"] == id:
            usage = p.get("usage", 0)
            risk = compute_risk(usage)
            return {"risk" : risk}
    raise HTTPException(status_code=404, detail="Patient not found")