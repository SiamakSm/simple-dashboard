// usePatient.ts
// 

import { useState, useEffect } from "react"
import { getPatientById } from "../api/patientApi"
import type { Patient } from '../types/patient'

export function usePatient(id: number) {
  const [data, setData] = useState<Patient | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
    
        setLoading(true)
        const patient = await getPatientById(id)
        setData(patient)
        setError(null)
      
    } catch (e) {
        setError("Failed to load patient")
    } finally {
        setLoading(false)
    }
    }
    fetchData()
  }, [id])

  return { data, loading, error }
}