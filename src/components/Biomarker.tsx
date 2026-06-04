// components/Biomarker.tsx

type BiomarkerProps = {
  heartRate: number
}

function Biomarker({ heartRate }: BiomarkerProps) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">❤️</div>
        <h3 className="card-title">Biomarker</h3>
      </div>

      <div className="biomarker-list">
        <div className="biomarker-item">
          <div className="biomarker-label">
            <div className="biomarker-dot"></div>
            Heart Rate
          </div>
          <div>
            <span className="biomarker-value">{heartRate}</span>
            <span className="biomarker-unit">bpm</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Biomarker