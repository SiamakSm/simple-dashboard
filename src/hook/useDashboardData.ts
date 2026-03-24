// hook/useDashboardData.ts
import { useState, useEffect } from 'react'
import { getPatientById } from '../api/patientApi'
import { getBiomarkerById } from '../api/biomarkerApi'
import { mapDashboardData, type DashboardData } from '../utils/mapDashboardData'

export function useDashboardData(id: number) {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)

        const patient = await getPatientById(id)

        let biomarker = null
        try {
          biomarker = await getBiomarkerById(id)
        } catch {
          biomarker = null
        }

        const mapped = mapDashboardData(patient, biomarker)

        setData(mapped)
        setError(null)
      } catch {
        setError('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { data, loading, error }
}
