const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");

function openModal(largeSrc, altText) {
  modalImage.src = largeSrc;
  modalImage.alt = altText;
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
  modalImage.src = "";
}

for (let i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", function () {
    openModal(galleryImages[i].getAttribute("data-large"), galleryImages[i].alt);
  });
}

modal.addEventListener("click", closeModal);

modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});
