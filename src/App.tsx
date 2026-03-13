// app.tsx
//
import "./App.css";
import { useState, useEffect } from "react";
import PatientInfo from "./components/PatientInfo";
import { patients } from "./data/patient";
import PatientList from "./components/PatientList";
import UsageChart from "./components/UsageChart";

function App() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(patients[0]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p>Loading patient data...</p>;

  return (
    <div className="dashboard">
      <div className="sidebar">
        <PatientList
          patients={patients}
          onSelect={(patient) => setData(patient)}
        />
      </div>

      <div className="main">
        <h1>Patient Dashboard</h1>

        <PatientInfo id={data.id} age={data.age} usage={data.usage} />

        <UsageChart />
      </div>
    </div>
  );
}

export default App;
