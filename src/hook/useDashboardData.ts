// hook/useDashboardData.ts


import { useState, useEffect } from "react"
import { getPatientById } from "../api/patientApi"
import type { Patient } from '../types/patient'
import { getBiomarkerById } from "../api/biomarkerApi"
import type { Biomarker } from "../types/biomarker"


export function useDashboardData (id :number) {
    const [patient, setPatient] = useState<Patient | null>(null)
    const [biomarker, setBiomarker] = useState<Biomarker | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const results = await Promise.allSettled([
                    getPatientById(id),
                    getBiomarkerById(id)
                ])
                const patientResult = results[0]
                const biomarkerResult = results[1]

                if (patientResult.status === "fulfilled") {
                    setPatient(patientResult.value)
                } else {
                    setError("Patient not found")
                }
                if (biomarkerResult.status === "fulfilled") {
                    setBiomarker(biomarkerResult.value)
                } else {
                    setBiomarker(null) // normal
                }
                setError(null)
            } catch (e) {
                setError("Failed to load dashboard data")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id])
    return { patient, biomarker, loading, error }
}