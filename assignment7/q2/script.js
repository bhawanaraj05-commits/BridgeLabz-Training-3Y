const maxLength = 100;
const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const allowedKeys = [
  "Backspace", "Delete", "ArrowLeft", "ArrowRight",
  "ArrowUp", "ArrowDown", "Home", "End", "Tab"
];

function updateCounter() {
  if (textBox.value.length > maxLength) {
    textBox.value = textBox.value.slice(0, maxLength);
  }

  const remaining = maxLength - textBox.value.length;
  counter.textContent = remaining + " characters left";

  counter.classList.remove("warning");
  counter.classList.remove("danger");

  if (remaining === 0) {
    counter.classList.add("danger");
  } else if (remaining <= 20) {
    counter.classList.add("warning");
  }
}

textBox.addEventListener("keydown", function (event) {
  const hasSelection = textBox.selectionStart !== textBox.selectionEnd;
  const limitReached = textBox.value.length >= maxLength;
  const isShortcut = event.ctrlKey || event.metaKey;

  if (limitReached && !allowedKeys.includes(event.key) && !isShortcut && !hasSelection) {
    event.preventDefault();
  }
});

textBox.addEventListener("input", updateCounter);

resetButton.addEventListener("click", function () {
  textBox.value = "";
  updateCounter();
  textBox.focus();
});

updateCounter();
