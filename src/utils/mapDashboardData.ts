// utils/mapDashboardData.ts

export function mapDashboardData(
  patient: any, biomarker: any, risk: any) {
  return {
    id: patient.id,
    age: patient.age,
    usage: patient.usage,
    status: patient.status,
    risk: risk ?? null,
    heartRate: biomarker?.heartRate ?? null,
    usageHistory: patient.usageHistory ?? null,
  }
}