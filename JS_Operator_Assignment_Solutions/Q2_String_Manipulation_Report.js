// Q2: String Manipulation Report
// Clean up a product title before showing it on an online store.

let productName = " wireless headphones PRO ";

// Remove extra spaces and convert the title to lowercase first.
let cleanedTitle = productName.trim().toLowerCase();

// Capitalize the first letter of each word.
cleanedTitle = cleanedTitle
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" with the requested edition label.
cleanedTitle = cleanedTitle.replace(/\bPro\b/i, "Pro Edition");

console.log(`Product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
