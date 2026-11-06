const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", function (event) {
  coordinates.textContent = "clientX: " + event.clientX + ", clientY: " + event.clientY;
});

box.addEventListener("mouseleave", function () {
  coordinates.textContent = "Move the mouse inside the box";
});

box.addEventListener("dblclick", function (event) {
  const boxPosition = box.getBoundingClientRect();
  const dot = document.createElement("div");

  dot.className = "dot";
  dot.style.left = (event.clientX - boxPosition.left - box.clientLeft) + "px";
  dot.style.top = (event.clientY - boxPosition.top - box.clientTop) + "px";

  box.appendChild(dot);
});
