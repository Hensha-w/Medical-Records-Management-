// Sidebar toggle (for mobile)
const toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
toggle.addEventListener("click", () => sidebar.classList.toggle("active"));

// Clear logs
document.getElementById("clearLogs").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all logs?")) {
    document.getElementById("activityLog").innerHTML = "<li>No recent activities.</li>";
    alert("Logs cleared successfully!");
  }
});

// Account controls
document.getElementById("changePasswordBtn").addEventListener("click", () => {
  alert("Password change feature coming soon!");
});

document.getElementById("enable2FA").addEventListener("click", () => {
  alert("Two-Factor Authentication enabled!");
});

document.getElementById("lockAccount").addEventListener("click", () => {
  alert("Account locked successfully.");
});

document.getElementById("unlockAccount").addEventListener("click", () => {
  alert("Account unlocked successfully.");
});

// Backup and restore
document.getElementById("backupBtn").addEventListener("click", () => {
  alert("Backup process started...");
});

document.getElementById("restoreBtn").addEventListener("click", () => {
  alert("Data restored successfully!");
});
