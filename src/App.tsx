// app.tsx
//
import "./App.css"
import { useState } from "react"
import PatientList from "./components/PatientList"
import PatientInfo from "./components/PatientInfo"
import UsageChart from "./components/UsageChart"
import RiskScore from "./components/RiskScore"
import Biomarker from "./components/Biomarker"
import { useDashboardData } from "./hook/useDashboardData"
import { usePatients } from './hook/usePatients'

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const { patients, loading: loadingPatients } = usePatients()
  const { data, loading, error } = useDashboardData(selectedId ?? 0)

  return (
    <div className="dashboard">
      <div className="sidebar">
        {loadingPatients ? (
          <p>Loading patients...</p>
        ) : (
          <PatientList
            patients={patients}
            onSelect={(patient) => setSelectedId(patient.id)}
          />
        )}
      </div>

      <div className="main">
        <h1>Patient Dashboard</h1>
        {!selectedId && <p>Select a patient</p>}

        {!selectedId && loading && <p>Loading...</p>}
        {!selectedId && error && <p>{error}</p>}

        {!selectedId && !loading && !error && data && (
          <>
            <PatientInfo id={data.id} age={data.age} usage={data.usage} />

            <p>Status: {data.status}</p>

            {data.usageHistory && data.usageHistory.length > 0 ? (
              <UsageChart data={data.usageHistory} />
            ) : (
              <p>No usage data</p>
            )}

            {data.risk !== null && <RiskScore risk={data.risk} />}

            {data.heartRate !== null && (
              <Biomarker heartRate={data.heartRate} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App