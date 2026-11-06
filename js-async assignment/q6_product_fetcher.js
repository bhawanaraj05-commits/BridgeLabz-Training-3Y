async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
      console.log("Product: " + products[i].title);
      console.log("Price: $" + products[i].price);
      console.log("Image: " + products[i].image);
      console.log("");
    }

    if (typeof document !== "undefined") {
      showCards(products);
    }
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    if (typeof document !== "undefined") {
      const message = document.createElement("p");
      message.textContent = "Failed to load products. Please try again.";
      document.body.appendChild(message);
    }
  }
}

function showCards(products) {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap = "15px";

  products.forEach(function (product) {
    const card = document.createElement("div");
    card.style.width = "220px";
    card.style.border = "1px solid gray";
    card.style.padding = "10px";
    card.style.textAlign = "center";

    const image = document.createElement("img");
    image.src = product.image;
    image.style.height = "150px";

    const title = document.createElement("h4");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = "$" + product.price;

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    container.appendChild(card);
  });

  document.body.appendChild(container);
}

getProducts();
