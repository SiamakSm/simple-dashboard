// utils/mapDashboardData.ts

export function mapDashboardData(patient: any, biomarker: any) {
  return {
    id: patient.id,
    age: patient.age,
    usage: patient.usage,

    risk: patient.risk ?? null,
    heartRate: biomarker?.heartRate ?? null,
    usageHistory: patient.usageHistory ?? null,
  }
}