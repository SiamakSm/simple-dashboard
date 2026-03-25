// hook/useDashboardData.ts
import { useState, useEffect } from 'react'
import { mapDashboardData, type DashboardData } from '../utils/mapDashboardData'

export function useDashboardData(id: number) {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)

        const resPatient = await fetch(`http://localhost:8000/patient/${id}`)
        const patient = await resPatient.json()

        const resBio = await fetch(`http://localhost:8000/biomarker/${id}`)
        const biomarker = await resBio.json()

        const mapped = mapDashboardData(patient, biomarker)

        setData(mapped)
        setError(null)
      } catch (e) {
        setError('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { data, loading, error }
}
