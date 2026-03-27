#  backend/main.py

from fastapi import FastAPI
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from data.patient import patients
from data.biomarker import biomarkers
from services.risk_service import compute_risk

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# root
@app.get("/")
def root():
    return {"message": "API is running"}


# get patients
@app.get("/patients")
def get_patients():
    return patients


# get patient by id
@app.get("/patient/{id}")
def get_patient(id: int):
    for p in patients:
        if p["id"] == id:
            return p
    raise HTTPException(status_code=404, detail="Patient not found")


# get biomarkers
@app.get("/biomarkers")
def get_biomarkers():
    return biomarkers


# get biomarker by id
@app.get("/biomarker/{id}")
def get_biomarker(id: int):
    biomarker = biomarkers.get(id)
    if not biomarker:
        raise HTTPException(status_code=404, detail="Biomarker not found")
    return biomarker


# get risk (simulation IA)
@app.get("/patient/{id}/risk")
def get_risk(id: int):
    for p in patients:
        if p["id"] == id:
            usage = p.get("usage", 0)
            risk = compute_risk(usage)
            return {"risk" : risk}
    raise HTTPException(status_code=404, detail="Patient not found")