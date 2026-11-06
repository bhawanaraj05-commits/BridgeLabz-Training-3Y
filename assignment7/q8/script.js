const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownList = document.getElementById("dropdownList");

dropdownButton.addEventListener("click", function () {
  dropdownList.classList.toggle("show");
});

dropdownList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    dropdownButton.textContent = event.target.textContent;
    dropdownList.classList.remove("show");
  }
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdownList.classList.remove("show");
  }
}, true);
