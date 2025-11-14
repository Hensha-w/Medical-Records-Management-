// Toggle sidebar (mobile)
const toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Start Live Chat Simulation
document.getElementById("startChatBtn").addEventListener("click", () => {
  alert("Launching live chat support... (This will connect to your tech support system)");
});

// Submit Feedback
document.getElementById("submitFeedback").addEventListener("click", () => {
  const subject = document.getElementById("feedbackSubject").value;
  const message = document.getElementById("feedbackMessage").value;

  if (!subject || !message) {
    alert("Please fill all fields before submitting.");
    return;
  }

  alert(`Thank you! Your feedback has been submitted.\n\nSubject: ${subject}`);
});