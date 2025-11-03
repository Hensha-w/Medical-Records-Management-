const formSteps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");
const progressSteps = document.querySelectorAll(".progress-step");
const progressLines = document.querySelectorAll(".progress-line");

let formStepIndex = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (validateStep(formStepIndex)) {
      formStepIndex++;
      updateFormSteps();
      updateProgressBar();
    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepIndex--;
    updateFormSteps();
    updateProgressBar();
  });
});

function updateFormSteps() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === formStepIndex);
  });
}

function updateProgressBar() {
  progressSteps.forEach((step, index) => {
    step.classList.toggle("active", index <= formStepIndex);
  });

  progressLines.forEach((line, index) => {
    line.classList.toggle("active", index < formStepIndex);
  });
}

// Simple validation per step
function validateStep(stepIndex) {
  const inputs = formSteps[stepIndex].querySelectorAll("input, select, textarea");
  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return false;
    }
  }
  return true;
}

// Final form submission
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign up successful! (Here you can add backend integration)");
});