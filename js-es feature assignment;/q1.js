"use strict";

const apiData = [
    "25", "true", "false", "NaN", " ",
    "100px", "3.14", null, undefined
];

const valid = [];
const invalid = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);

    console.log(`\nValue: ${str}`);
    console.log(`Number: ${num}`);
    console.log(`Boolean: ${bool}`);
    console.log(`String: "${str}"`);

    // Whitespace-only strings are invalid even though Number(" ") is 0.
    const isInvalid =
        Number.isNaN(num) ||
        (typeof value === "string" && value.trim() === "");

    if (isInvalid) {
        invalid.push(value);
        console.log("Status: Invalid");
    } else {
        valid.push(num);
        console.log("Status: Valid");
    }
}

console.log("\nValid numeric data:", valid);
console.log("Invalid data:", invalid);