// hook/useBiomarker.ts

import { useState, useEffect } from "react"
import { getBiomarkerById } from "../api/biomarkerApi"
import type { Biomarker } from "../types/biomarker"

export function useBiomarker(id: number) {
  const [data, setData] = useState<Biomarker | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
    
        setLoading(true)
        const result = await getBiomarkerById(id)
        setData(result)
        setError(null)
      
    } catch (e) {
        setError("Failed to load biomarker")
    } finally {
        setLoading(false)
    }
    }
    fetchData()
  }, [id])

  return { data, loading, error }
}