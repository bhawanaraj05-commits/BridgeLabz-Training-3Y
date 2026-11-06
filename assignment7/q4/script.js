const themeButtons = document.querySelectorAll("button[data-theme]");
const currentTheme = document.getElementById("currentTheme");

function applyTheme(themeName) {
  document.body.setAttribute("class", themeName + "-theme");
  document.body.setAttribute("data-theme", themeName);
  currentTheme.textContent = "Current theme: " + document.body.getAttribute("data-theme");
}

for (let i = 0; i < themeButtons.length; i++) {
  themeButtons[i].addEventListener("click", function () {
    applyTheme(themeButtons[i].getAttribute("data-theme"));
  });
}

applyTheme("light");
