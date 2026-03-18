// types/patient.ts

export type UsagePoint = {
    day :string,
    usage : number
}

export type Patient = {
  id: number
  age: number
  usage: number

  risk?: number
  usageHistory?: UsagePoint[]
}