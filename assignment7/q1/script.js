const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

let editingItem = null;

function addProduct() {
  const productName = productInput.value.trim();

  if (productName === "") {
    alert("Please enter a product name");
    return;
  }

  const item = document.createElement("li");
  item.innerHTML =
    '<span class="product-name"></span>' +
    '<button class="edit-btn">Edit</button>' +
    '<button class="delete-btn">Delete</button>';
  item.querySelector(".product-name").textContent = productName;

  productList.appendChild(item);
  productInput.value = "";
  productInput.focus();
}

function startEdit(item) {
  if (editingItem !== null && editingItem !== item) {
    saveEdit(editingItem);
  }

  const nameSpan = item.querySelector(".product-name");
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "edit-input";
  editInput.value = nameSpan.textContent;

  item.dataset.oldName = nameSpan.textContent;
  item.replaceChild(editInput, nameSpan);
  item.querySelector(".edit-btn").textContent = "Save";

  editingItem = item;
  editInput.focus();
}

function saveEdit(item) {
  const editInput = item.querySelector(".edit-input");

  if (editInput === null) {
    return;
  }

  let newName = editInput.value.trim();
  if (newName === "") {
    newName = item.dataset.oldName;
  }

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = newName;

  item.replaceChild(nameSpan, editInput);
  item.querySelector(".edit-btn").textContent = "Edit";

  editingItem = null;
}

addButton.addEventListener("click", addProduct);

productInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addProduct();
  }
});

productList.addEventListener("click", function (event) {
  const clicked = event.target;
  const item = clicked.closest("li");

  if (item === null) {
    return;
  }

  if (clicked.classList.contains("delete-btn")) {
    if (editingItem === item) {
      editingItem = null;
    }
    item.remove();
  } else if (clicked.classList.contains("edit-btn")) {
    if (editingItem === item) {
      saveEdit(item);
    } else {
      startEdit(item);
    }
  }
});

productList.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
    saveEdit(event.target.closest("li"));
  }
});

document.addEventListener("click", function (event) {
  if (editingItem !== null && !editingItem.contains(event.target)) {
    saveEdit(editingItem);
  }
});
