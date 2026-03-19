// api/patientApi.ts

import { patients } from "../data/patient";
import type { Patient } from "../types/patient";

export function getPatientById(id : number): Promise<Patient>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const patient = patients.find((p) => p.id === id)

        if (!patient) {
          reject('Patient not found')
        } else {
          resolve(patient)
        }
      }, 1000)
    })
}


