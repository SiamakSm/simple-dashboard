type PatientInfoProps = {
  id: number
  age: number
  usage: number
}

function PatientInfo({ id, age, usage }: PatientInfoProps) {
  return (
    <div>
      <h2>Patient Information</h2>

      <p>ID: {id}</p>
      <p>Age: {age}</p>
      <p>Usage: {usage} hours</p>
    </div>
  );
}

export default PatientInfo