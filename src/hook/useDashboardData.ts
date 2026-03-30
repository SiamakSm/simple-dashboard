// front/hook/useDashboardData.ts

import { useState, useEffect } from 'react'

export function useDashboardData(id: number | null) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)

        const results = await fetch(`http://localhost:8000/dashboard/${id}`)
        const data = await results.json()

        setData(data)
        setError(null)
      } catch (e) {
        setError('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }
    
    if (id) {
      fetchData()
    }

  }, [id])

  return { data, loading, error }
}

