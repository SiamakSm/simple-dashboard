//  api/biomarkerApi.ts

import { biomarkers } from "../data/biomarker";

export function getBiomarkerById(id : number):Promise<{heartRate :number}>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = biomarkers[id]
        
        if (!data) {
          reject('Biomarker not found')
        } else {
          resolve({
            heartRate : data.heartRate ?? 0
        })
        }
      }, 1000)
    })
}


