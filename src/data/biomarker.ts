// data/biomarker.ts

type Biomarker = {
  heartRate : number
}

export const biomarkers : Record <number, Biomarker> = {
  1024: { heartRate: 72 },
  3091: { heartRate: 65 }
}