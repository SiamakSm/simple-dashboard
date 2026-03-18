// RiskScore.tsx

type RiskProps = {
    risk?: number
}

function RiskScore({ risk }: RiskProps) {
    if (risk === undefined) {
        return <p>No risk data available</p>
    }

    const level = risk > 0.8 ? "High" : "Low"

    return (
        <div>
            <h3>Risk Score</h3>
            <p>{level} : {risk}</p>
        </div>
    )
}

export default RiskScore

