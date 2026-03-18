// app.tsx
//
import "./App.css";
import { useState, useEffect } from "react";
import PatientInfo from "./components/PatientInfo";
import { patients } from "./data/patient";
import PatientList from "./components/PatientList";
import UsageChart from "./components/UsageChart";
import { getPatientById } from './api/patientApi'

function App() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const patient = await getPatientById(3091)
        setData(patient)
      } catch (e) {
        setError('Failed to load patient')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p> Loading patient data...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="dashboard">
      <div className="sidebar">
        <PatientList
          patients={patients}
          onSelect={async (patient) => {
            setLoading(true)
            const p = await getPatientById(patient.id)
            setData(p)
            setLoading(false)
          }}
        />
      </div>

      <div className="main">
        <h1>Patient Dashboard</h1>

        <PatientInfo id={data.id} age={data.age} usage={data.usage} />

        {data.usageHistory ? (
          <UsageChart data={data.usageHistory || []} />
        ) : (
          <p>No usage data available</p>
        )}
      </div>
    </div>
  )
}

export default App;
