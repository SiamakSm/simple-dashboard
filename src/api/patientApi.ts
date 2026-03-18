// patientApi.ts

import { patients } from "../data/patient";
    
export function getPatientById(id : number){
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