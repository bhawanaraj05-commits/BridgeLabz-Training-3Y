const searchBox = document.getElementById("searchBox");
const tableRows = document.querySelectorAll("#studentBody tr");
const noResults = document.getElementById("noResults");

searchBox.addEventListener("input", function () {
  const searchText = searchBox.value.trim().toLowerCase();
  let visibleCount = 0;

  for (let i = 0; i < tableRows.length; i++) {
    const rowText = tableRows[i].textContent.toLowerCase();

    if (rowText.includes(searchText)) {
      tableRows[i].style.display = "";
      visibleCount++;
    } else {
      tableRows[i].style.display = "none";
    }
  }

  if (visibleCount === 0) {
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");
  }
});
