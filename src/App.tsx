// app.tsx
//

import "./App.css";
import { useState } from 'react'
import PatientInfo from "./components/PatientInfo";
import { patients } from "./data/patient";
import PatientList from "./components/PatientList";
import UsageChart from './components/UsageChart'
import RiskScore from './components/RiskScore'
import Biomarker from './components/Biomarker'
import { useDashboardData } from './hook/useDashboardData'


function App() {
  const [selectedId, setSelectedId] = useState<number>(patients[0].id)
  const { patient, biomarker, loading, error } = useDashboardData(selectedId)


  return (
    <div className="dashboard">
      <div className="sidebar">
        <PatientList
          patients={patients}
          onSelect={(patient) => {
            setSelectedId(patient.id)
          }}
        />
      </div>

      <div className="main">
        <h1>Patient Dashboard</h1>

        {loading && <p>Loading patient data ...</p>}
        {error && <p>{error}</p>}

        {!loading && !error && patient && (
          <>
            <PatientInfo
              id={patient.id}
              age={patient.age}
              usage={patient.usage}
            />

            {patient.usageHistory ? (
              <UsageChart data={patient.usageHistory} />
            ) : (
              <p>No usage data available</p>
            )}

            {patient.risk !== undefined ? (
              <RiskScore risk={patient.risk} />
            ) : (
              <p>No risk data</p>
            )}

            {biomarker ? (
              <Biomarker heartRate={biomarker.heartRate} />
            ) : (
              <p>No biomarker data</p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App;
