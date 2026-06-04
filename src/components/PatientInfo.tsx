// components/PatientInfo.tsx

type PatientInfoProps = {
  id: number
  age: number
  usage: number
}

function PatientInfo({ id, age, usage }: PatientInfoProps) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">🏥</div>
        <h3 className="card-title">Patient Information</h3>
      </div>

      <div className="biomarker-list">
        <div className="info-row">
          <span className="info-label">Patient ID</span>
          <span className="info-value">#{id}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Age</span>
          <span className="info-value">{age} years</span>
        </div>
        <div className="info-row">
          <span className="info-label">Daily Usage</span>
          <span className="info-value">{usage} hrs</span>
        </div>
      </div>
    </div>
  )
}

export default PatientInfo
