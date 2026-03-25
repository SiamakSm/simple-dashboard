#  backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data.patient import patients
from data.biomarker import biomarkers

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "API is running"}


# get patient
@app.get("/patient/{id}")
def get_patient(id: int):
    for p in patients:
        if p["id"] == id:
            return p
    return {"error": "Patient not found"}


# get biomarker
@app.get("/biomarker/{id}")
def get_biomarker(id: int):
    return biomarkers.get(id, {})


# get risk (simulation IA)
@app.get("/patient/{id}/risk")
def get_risk(id: int):
    for p in patients:
        if p["id"] == id:
            usage = p.get("usage", 0)

            # logique simple (mock AI)
            if usage < 4:
                return {"risk": "high"}
            elif usage < 6:
                return {"risk": "medium"}
            else:
                return {"risk": "low"}

    return {"error": "Patient not found"}