const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

function openModal(name) {
  document.getElementById("recordModal").style.display = "flex";
  document.getElementById("patientName").textContent = name;
}

function closeModal() {
  document.getElementById("recordModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("recordModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
