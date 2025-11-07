const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.menu-toggle');
const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');
const inputs = document.querySelectorAll('input, textarea, select');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

editBtn.addEventListener('click', () => {
  inputs.forEach(input => input.disabled = false);
  saveBtn.disabled = false;
  editBtn.disabled = true;
});

saveBtn.addEventListener('click', () => {
  inputs.forEach(input => input.disabled = true);
  saveBtn.disabled = true;
  editBtn.disabled = false;
  alert('Hospital profile updated successfully!');
});