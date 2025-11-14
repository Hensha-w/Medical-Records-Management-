// Sidebar toggle (mobile view)
const toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
toggle.addEventListener("click", () => sidebar.classList.toggle("active"));

// Save general settings
document.getElementById("saveGeneral").addEventListener("click", () => {
  const name = document.getElementById("hospitalName").value;
  const email = document.getElementById("contactEmail").value;
  alert(`✅ General settings saved:\nHospital: ${name}\nEmail: ${email}`);
});

// Theme switching
document.getElementById("applyTheme").addEventListener("click", () => {
  const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
  document.body.style.background = selectedTheme === "dark" ? "#1e1e1e" : "#f4f6f9";
  document.body.style.color = selectedTheme === "dark" ? "#fff" : "#333";
  alert(`🎨 Theme changed to ${selectedTheme} mode.`);
});

// Account updates
document.getElementById("updateAccount").addEventListener("click", () => {
  const user = document.getElementById("username").value;
  alert(`👤 Account updated successfully for ${user || "User"}`);
});