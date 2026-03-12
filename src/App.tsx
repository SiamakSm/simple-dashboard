import './App.css'
import { useState, useEffect } from "react"
import PatientInfo from "./components/PatientInfo"
import { patients } from "./data/patient"

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

      <PatientInfo id={data.id} age={data.age} usage={data.usage} />

      <button onClick={() => setData(patients[1])}>
        Patient 2
      </button>

      <button onClick={() => setData(patients[0])}>
        Patient 1
      </button>

    </div>
  )
}

export default App