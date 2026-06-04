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
  const { data, loading, error } = useDashboardData(selectedId)

  return (
    <div className="dashboard">
      <aside className="sidebar">
        {loadingPatients ? (
          <div className="state-placeholder" style={{ minHeight: '100px' }}>
            <span className="loading-dot">●</span>
            <span className="loading-dot" style={{ animationDelay: '0.2s' }}>●</span>
            <span className="loading-dot" style={{ animationDelay: '0.4s' }}>●</span>
          </div>
        ) : (
          <PatientList
            patients={patients}
            onSelect={(patient) => setSelectedId(patient.id)}
            selectedId={selectedId}
          />
        )}
      </aside>

      <main className="main">
        <div className="main-header">
          <h1>Patient Dashboard</h1>
          <p>Select a patient to view their detailed medical profile and metrics</p>
        </div>

        {!selectedId && (
          <div className="state-placeholder">
            <div className="state-placeholder-icon">🗂️</div>
            <div className="state-placeholder-title">No patient selected</div>
            <div className="state-placeholder-text">Choose a patient from the sidebar to view their data.</div>
          </div>
        )}

        {selectedId && loading && (
          <div className="state-placeholder">
            <div>
              <span className="loading-dot" style={{ fontSize: '24px' }}>●</span>
              <span className="loading-dot" style={{ fontSize: '24px', animationDelay: '0.2s', margin: '0 8px' }}>●</span>
              <span className="loading-dot" style={{ fontSize: '24px', animationDelay: '0.4s' }}>●</span>
            </div>
            <div className="state-placeholder-title">Loading records...</div>
          </div>
        )}

        {selectedId && error && (
          <div className="state-placeholder">
            <div className="state-placeholder-icon" style={{ color: 'var(--color-risk-high)' }}>⚠️</div>
            <div className="state-placeholder-title">Failed to load data</div>
            <div className="state-placeholder-text">{error}</div>
          </div>
        )}

        {selectedId && !loading && !error && data && (
          <div className="cards-grid">
            <PatientInfo id={data.id} age={data.age} usage={data.usage} />

            {data.risk !== null && <RiskScore risk={data.risk} />}

            {data.heartRate !== null && (
              <Biomarker heartRate={data.heartRate} />
            )}
            
            {/* Empty card to maintain grid if needed, or status card */}
            <div className="card">
               <div className="card-header">
                  <div className="card-icon">📋</div>
                  <h3 className="card-title">Status</h3>
                </div>
                <div className="risk-gauge-wrapper" style={{ justifyContent: 'center', height: '100px' }}>
                  <span className="status-badge">{data.status}</span>
                </div>
            </div>

            {data.usageHistory && data.usageHistory.length > 0 ? (
              <UsageChart data={data.usageHistory} />
            ) : (
              <div className="card card-full">
                <div className="card-header">
                  <div className="card-icon">📈</div>
                  <h3 className="card-title">Usage History</h3>
                </div>
                <div className="state-placeholder" style={{ minHeight: '150px' }}>
                  <div className="state-placeholder-text">No usage data available</div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App