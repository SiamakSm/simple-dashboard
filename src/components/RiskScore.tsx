// components/RiskScore.tsx

type RiskProps = {
  risk?: number | string | null
}

function RiskScore({ risk }: RiskProps) {
  if (risk === undefined || risk === null) {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-icon">⚠️</div>
          <h3 className="card-title">Risk Score</h3>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>No risk data available</p>
      </div>
    )
  }

  let level = 'Low'
  let isNumeric = typeof risk === 'number'
  let numericRisk = isNumeric ? (risk as number) : 0

  if (typeof risk === 'string') {
    const lowerRisk = risk.toLowerCase()
    level = lowerRisk === 'high' ? 'High' : lowerRisk === 'medium' ? 'Medium' : 'Low'
  } else {
    level = numericRisk > 0.8 ? 'High' : numericRisk > 0.5 ? 'Medium' : 'Low'
  }

  const riskClass = level === 'High' ? 'risk-high' : level === 'Medium' ? 'risk-medium' : 'risk-low'
  const indicatorPercent = isNumeric ? Math.min(Math.max(numericRisk * 100, 2), 98) : 0

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">⚠️</div>
        <h3 className="card-title">Risk Score</h3>
      </div>

      <div className="risk-gauge-wrapper">
        <div className={`risk-badge ${riskClass}`} style={{ transform: 'scale(1.2)', marginBottom: isNumeric ? '0' : '16px' }}>
          {level === 'High' ? '🔴' : level === 'Medium' ? '🟡' : '🟢'} {level} Risk
        </div>

        {isNumeric && (
          <>
            <div className={`risk-score-value ${riskClass}`}>
              {Math.round(numericRisk * 100)}
              <span style={{ fontSize: '20px', fontWeight: 400 }}>/100</span>
            </div>

            <div className="risk-bar-track" style={{ width: '100%' }}>
              <div
                className={`risk-bar-indicator ${riskClass}`}
                style={{ left: `${indicatorPercent}%` }}
              />
            </div>

            <p className="risk-description">
              Score: <strong>{numericRisk.toFixed(3)}</strong> — {
                level === 'High'
                  ? 'Immediate attention recommended.'
                  : level === 'Medium'
                  ? 'Monitoring advised.'
                  : 'Within normal range.'
              }
            </p>
          </>
        )}

        {!isNumeric && (
          <p className="risk-description">
            The patient's current risk assessment is <strong>{risk}</strong>.
          </p>
        )}
      </div>
    </div>
  )
}

export default RiskScore
