// patientApi.ts

import { patients } from "../data/patient";
    
export function getPatientById(id : number){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            const patient = patients.find(p => p.id === id)
            resolve(patient)
        },1000);
    })
}