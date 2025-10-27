document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const pw = document.getElementById('password');

  form.addEventListener('submit', (e) => {
    // simple client-side checks (server-side still required)
    if (!email.value || !pw.value) {
      e.preventDefault();
      alert('Please enter both email and password.');
      return;
    }

    // basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      email.focus();
      return;
    }

    // password length
    if (pw.value.length < 8) {
      e.preventDefault();
      alert('Password must be at least 8 characters.');
      pw.focus();
      return;
    }

    // if all good, form will submit to login.php
  });
});
