// components/Biomarker

type BiomarkerProps = {
    heartRate : number
}

function Biomarker({heartRate} : 
    BiomarkerProps) {
    return (
        <div>
            <h2>Patient Biomarker</h2>
            <p>Heart rate: {heartRate}</p>
        </div>
    )
}

export default Biomarker