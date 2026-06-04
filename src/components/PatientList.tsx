import type { Patient } from "../types/patient";

type PatientListProps = {
  patients: Patient[]
  onSelect: (patient: Patient) => void
  selectedId?: number | null
}

function PatientList({ patients, onSelect, selectedId }: PatientListProps) {
  return (
    <>
      <div className="sidebar-header">
        <p className="sidebar-title">Medical App</p>
        <p className="sidebar-subtitle">Patients</p>
      </div>

      <div className="sidebar-list">
        {patients.map((patient) => (
          <button
            key={patient.id}
            className={`patient-item ${selectedId === patient.id ? 'active' : ''}`}
            onClick={() => onSelect(patient)}
          >
            <div className="patient-avatar">
              P{patient.id}
            </div>
            <div className="patient-item-label">
              <span className="patient-item-name">Patient {patient.id}</span>
              <span className="patient-item-meta">Age {patient.age}</span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

export default PatientList