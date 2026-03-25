// types/patient.ts


export type Patient = {
  id: number
  age: number
  usage: number

  risk?: number | null
  usageHistory?: UsagePoint[] | null
}

export type UsagePoint = {
  day: string
  usage: number
}
