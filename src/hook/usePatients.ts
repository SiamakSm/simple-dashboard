// front/hook/usePatients.ts

import { useState,useEffect } from "react"

export function usePatients() {
  const [patients, setPatients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

useEffect(() => {
    async function fetchPatients() {
      try {
        const result = await fetch("http://127.0.0.1:8000/patients")
        const patientRes = await result.json()
        setPatients(patientRes)
        
      } catch (e) {
        setError('Failed to load patients')
      } finally {
        setLoading(false)
      }
    }
    fetchPatients()
  }, [])
  return { patients, loading, error }
}
