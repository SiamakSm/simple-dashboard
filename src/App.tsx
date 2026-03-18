// app.tsx
//

import "./App.css";
import { useState } from 'react'
import PatientInfo from "./components/PatientInfo";
import { patients } from "./data/patient";
import PatientList from "./components/PatientList";
import UsageChart from "./components/UsageChart";
import { usePatient } from './hook/usePatient'

function App() {
  const [selectedId, setSelectedId] = useState<number>(patients[0].id)
  const { data, loading, error } = usePatient(selectedId)

  if (loading) return <p> Loading patient data...</p>
  if (error) return <p>{error}</p>

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
