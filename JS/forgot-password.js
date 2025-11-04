document.getElementById("forgotForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  if (email.trim() === "") {
    alert("Please enter your email address.");
    return;
  }

  // Simulate reset process (for now)
  alert("A password reset link has been sent to " + email);
  this.reset();
});