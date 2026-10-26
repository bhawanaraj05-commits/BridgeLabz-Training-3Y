// Q8: Dynamic Discount Evaluator
// Apply category discounts first, then check whether the cart qualifies
// for an additional 5% discount.

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((total, product) => total + product.price, 0);
let discountedTotal = 0;

console.log("Cart Summary");
console.log("------------");

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    const finalPrice = product.price - discount;
    discountedTotal += finalPrice;

    console.log(
        `${product.item}: ₹${product.price.toFixed(2)} | ` +
        `Discount: ${(discountRate * 100).toFixed(0)}% | ` +
        `Final price: ₹${finalPrice.toFixed(2)}`
    );
}

// The extra discount is based on the original cart value.
if (originalTotal > 50000) {
    discountedTotal *= 0.95;
    console.log("Extra 5% cart discount applied.");
} else {
    console.log("No extra cart discount applied.");
}

console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Final cart total: ₹${discountedTotal.toFixed(2)}`);
