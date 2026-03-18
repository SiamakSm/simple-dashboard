// types/patient.ts


export type Patient = {
  id: number
  age: number
  usage: number

  risk?: number
  usageHistory?: UsagePoint[]
}

export type UsagePoint = {
  day: string
  usage: number
}
