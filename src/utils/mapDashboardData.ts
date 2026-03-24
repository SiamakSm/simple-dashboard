// utils/mapDashboardData.ts

import type { Patient } from "../types/patient"
import type { Biomarker } from "../types/biomarker"

export type DashboardData = {
  id: number
  age: number
  usage: number

  risk: number | null
  riskLevel: "low" | "medium" | "high" | null

  heartRate: number | null

  usageHistory: {
    day: string
    usage: number
  }[]

  status: "adherent" | "non-adherent" | "unknown"
}

export function mapDashboardData(
  patient: Patient,
  biomarker?: Biomarker | null
): DashboardData {
  
  //  risk level simulation (mock AI)
  let riskLevel: DashboardData["riskLevel"] = null
  if (patient.risk !== undefined) {
    if (patient.risk > 1) riskLevel = "high"
    else if (patient.risk > 0.5) riskLevel = "medium"
    else riskLevel = "low"
  }

  // status simulation
  let status: DashboardData["status"] = "unknown"
  if (patient.usage >= 6) status = "adherent"
  else status = "non-adherent"

  return {
    id: patient.id,
    age: patient.age,
    usage: patient.usage,

    risk: patient.risk ?? null,
    riskLevel,

    heartRate: biomarker?.heartRate ?? null,

    usageHistory: patient.usageHistory ?? [],

    status,
  }
}