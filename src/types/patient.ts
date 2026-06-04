// types/patient.ts

export type Patient = {
  id: number
  age: number
  usage: number
  status?: string

  risk?: number | string | null
  usageHistory?: UsagePoint[] | null
  heartRate?: number | null
}

export type UsagePoint = {
  day: string
  usage: number
}
