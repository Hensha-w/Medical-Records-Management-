document.addEventListener('DOMContentLoaded', () => {
  const hospitalBtn = document.getElementById('hospitalBtn');
  const patientBtn = document.getElementById('patientBtn');

  // Redirect to different registration forms
  hospitalBtn.addEventListener('click', () => {
    window.location.href = 'register_hospital.php';
  });

  patientBtn.addEventListener('click', () => {
    window.location.href = 'register_patient.php';
  });
});