import './App.css'
import { useState, useEffect } from "react"
import PatientInfo from "./components/PatientInfo"
import { patients } from "./data/patient"
import PatientList from "./components/PatientList"

function App() {

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setData(patients[0])
      setLoading(false)
    }, 1000)

  }, [])

  if (loading)
    return <p>Loading patient data...</p>

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <PatientList
        patients={patients}
        onSelect={(patient) => setData(patient)}>
      </PatientList>

      <PatientInfo id={data.id} age={data.age} usage={data.usage} />
    </div>
  )
}

export default App