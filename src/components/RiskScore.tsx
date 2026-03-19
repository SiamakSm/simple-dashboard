// components/RiskScore.tsx

type RiskProps = {
  risk?: number
}

function RiskScore({ risk }: RiskProps) {
  if (risk === undefined) {
    return <p>No risk data available</p>
  }

  const level = risk > 0.8 ? 'High' : 'Low'

  return (
    <div>
      <h2>Patient Risk Score</h2>
      <p>
        {level} : {risk}
      </p>
    </div>
  )
}

export default RiskScore
