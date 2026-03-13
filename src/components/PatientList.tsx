type Patient = {
  id: number
  age: number
  usage: number
}

type PatientListProps = {
  patients: Patient[]
  onSelect: (patient: Patient) => void
}

function PatientList({ patients, onSelect }: PatientListProps) {

  return (
    <div>
      <h2>Patients</h2>

      {patients.map((patient) => (
        <div key={patient.id}>
          <button onClick={() => onSelect(patient)}>
            Patient {patient.id} (Age {patient.age})
          </button>
        </div>
      ))}
    </div>
  );
}

export default PatientList