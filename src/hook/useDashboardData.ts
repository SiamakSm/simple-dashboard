// hook/useDashboardData.ts
import { useState, useEffect } from 'react'
import { mapDashboardData } from '../utils/mapDashboardData'

export function useDashboardData(id: number | null) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    async function fetchData() {
      try {
        setLoading(true)

        const results = await Promise.allSettled([
          fetch(`http://localhost:8000/patient/${id}`),
          fetch(`http://localhost:8000/biomarker/${id}`),
        ])

        const patientRes = results[0]
        const biomarkerRes = results[1]

        let patient = null
        let biomarker = null

        if (patientRes.status === 'fulfilled') {
          patient = await patientRes.value.json()
        }
        if (biomarkerRes.status === 'fulfilled' && biomarkerRes.value.ok) {
          biomarker = await biomarkerRes.value.json()
        }

        if (!patient) {
          throw new Error('No patient data')
        }

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
