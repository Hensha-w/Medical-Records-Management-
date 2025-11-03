const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progressSteps = document.querySelectorAll(".progress-step");

let currentStep = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove("active");
      progressSteps[currentStep].classList.remove("active");
      currentStep++;
      steps[currentStep].classList.add("active");
      progressSteps[currentStep].classList.add("active");
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      steps[currentStep].classList.remove("active");
      progressSteps[currentStep].classList.remove("active");
      currentStep--;
      steps[currentStep].classList.add("active");
      progressSteps[currentStep].classList.add("active");
    }
  });
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Hospital registration complete!");
});