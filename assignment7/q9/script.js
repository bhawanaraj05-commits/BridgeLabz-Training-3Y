const registerForm = document.getElementById("registerForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

function checkName() {
  if (nameInput.value.trim() === "") {
    return "Name is required";
  }
  return "";
}

function checkEmail() {
  const email = emailInput.value.trim();

  if (email === "") {
    return "Email is required";
  }
  if (!email.includes("@")) {
    return "Email must contain @";
  }
  return "";
}

function checkPassword() {
  if (passwordInput.value.length < 6) {
    return "Password must be at least 6 characters";
  }
  return "";
}

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  nameError.textContent = checkName();
  emailError.textContent = checkEmail();
  passwordError.textContent = checkPassword();

  const allValid =
    nameError.textContent === "" &&
    emailError.textContent === "" &&
    passwordError.textContent === "";

  if (allValid) {
    successMessage.classList.remove("hidden");
    registerForm.reset();
  } else {
    successMessage.classList.add("hidden");
  }
});

nameInput.addEventListener("input", function () {
  if (nameError.textContent !== "") {
    nameError.textContent = checkName();
  }
  successMessage.classList.add("hidden");
});

emailInput.addEventListener("input", function () {
  if (emailError.textContent !== "") {
    emailError.textContent = checkEmail();
  }
  successMessage.classList.add("hidden");
});

passwordInput.addEventListener("input", function () {
  if (passwordError.textContent !== "") {
    passwordError.textContent = checkPassword();
  }
  successMessage.classList.add("hidden");
});
