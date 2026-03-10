import './App.css'
import { useState } from "react"
import PatientInfo from "./components/PatientInfo"

function App() {

  const [usage, setUsage] = useState(6.2)

  return (
    <div>
      <h1>Patient Dashboard</h1>

      <PatientInfo id={1024} age={57} usage={usage} />

      <button onClick={() => setUsage(usage + 0.5)}>
        Increase
      </button>

      <button onClick={() => setUsage(usage - 0.5)}>
        Decrease
      </button>

    </div>
  )
}

export default App