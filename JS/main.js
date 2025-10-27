// main javascript
// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (hamburger && hamburger.classList.contains("active")) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        }

        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Add scroll effect to header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });

  // Animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document
    .querySelectorAll(".feature-card, .step, .testimonial-card")
    .forEach((el) => {
      observer.observe(el);
    });

  // Registration form handlers (placeholder)
  document
    .querySelectorAll(".btn-primary, .btn-secondary")
    .forEach((button) => {
      button.addEventListener("click", function (e) {
        if (
          this.getAttribute("href") === "#hospital-register" ||
          this.getAttribute("href") === "#patient-register"
        ) {
          e.preventDefault();

          const userType =
            this.getAttribute("href") === "#hospital-register"
              ? "hospital"
              : "patient";
          alert(
            `Thank you for your interest! The ${userType} registration form would open here.`
          );

          // In a real implementation, you would show a modal or redirect to a registration page
        }
      });
    });
});
