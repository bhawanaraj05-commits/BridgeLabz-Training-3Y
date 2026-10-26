"use strict";

const input = ""; // Example: "6". Blank means default 5.
const parsed = Number(input);

const limit =
    input.trim() !== "" &&
    Number.isInteger(parsed) &&
    parsed > 0
        ? parsed
        : 5;

for (let i = 1; i <= limit; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row.trim());
}