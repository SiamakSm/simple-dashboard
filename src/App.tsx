import './App.css'
import PatientInfo from "./components/PatientInfo"

function App() {
  return (
    <div>
      <h1>Patient Dashboard</h1>
      <PatientInfo id={1024} age={57} usage={6.2} />
    </div>
  )
}

export default App