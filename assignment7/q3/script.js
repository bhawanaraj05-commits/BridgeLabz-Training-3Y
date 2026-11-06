const steps = document.querySelectorAll(".step");
const errors = document.querySelectorAll(".error");
const stepInfo = document.getElementById("stepInfo");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const formArea = document.getElementById("formArea");
const summary = document.getElementById("summary");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

let currentStep = 0;

function showStep(index) {
  for (let i = 0; i < steps.length; i++) {
    if (i === index) {
      steps[i].classList.add("active");
    } else {
      steps[i].classList.remove("active");
    }
  }

  stepInfo.textContent = "Step " + (index + 1) + " of " + steps.length;
  backButton.disabled = index === 0;
  nextButton.textContent = index === steps.length - 1 ? "Finish" : "Next";
}

function validateStep(index) {
  if (index === 0) {
    if (nameInput.value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
  }

  if (index === 1) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      return "Please enter a valid email";
    }
  }

  if (index === 2) {
    if (passwordInput.value.length < 6) {
      return "Password must be at least 6 characters";
    }
  }

  return "";
}

function showSummary() {
  formArea.classList.add("hidden");
  summary.classList.remove("hidden");

  document.getElementById("summaryName").textContent = nameInput.value.trim();
  document.getElementById("summaryEmail").textContent = emailInput.value.trim();
  document.getElementById("summaryPassword").textContent = "*".repeat(passwordInput.value.length);
}

nextButton.addEventListener("click", function () {
  const message = validateStep(currentStep);

  if (message !== "") {
    errors[currentStep].textContent = message;
    return;
  }

  errors[currentStep].textContent = "";

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    showSummary();
  }
});

backButton.addEventListener("click", function () {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);
