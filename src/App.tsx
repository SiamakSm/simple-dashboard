// app.tsx
//
import "./App.css"
import { useState } from "react"
import { patients } from "./data/patient"
import PatientList from "./components/PatientList"
import PatientInfo from "./components/PatientInfo"
import UsageChart from "./components/UsageChart"
import RiskScore from "./components/RiskScore"
import Biomarker from "./components/Biomarker"
import { useDashboardData } from "./hook/useDashboardData"

function App() {
  const [selectedId, setSelectedId] = useState<number>(patients[0].id)
  const { data, loading, error } = useDashboardData(selectedId)

  return (
    <div className="dashboard">
      <div className="sidebar">
        <PatientList
          patients={patients}
          onSelect={(patient) => setSelectedId(patient.id)}
        />
      </div>

      <div className="main">
        <h1>Patient Dashboard</h1>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && data && (
          <>
            <PatientInfo id={data.id} age={data.age} usage={data.usage} />

            <p>Status: {data.status}</p>

            {data.usageHistory.length > 0 ? (
              <UsageChart data={data.usageHistory} />
            ) : (
              <p>No usage data</p>
            )}

            {data.risk !== null && (
              <RiskScore risk={data.risk} />
            )}

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