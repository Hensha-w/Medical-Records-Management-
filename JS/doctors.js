// Sidebar toggle for mobile
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

// Modal functionality for Add/Edit Doctor
const modal = document.getElementById("doctorModal");
const addBtn = document.getElementById("addDoctorBtn");
const closeBtn = document.querySelector(".cancel-btn");
const doctorForm = document.getElementById("doctorForm");

if (addBtn && modal) {
  addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    doctorForm.reset();
  });
}

if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
