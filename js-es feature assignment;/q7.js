"use strict";

const operations = [
    "add", "divide", "power", "root", "subtract"
];

const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new Error("Root of a negative number is invalid");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError(
                `Invalid operation: ${operation}`
            );
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);

        console.log(
            `${operation}: ${num1}, ${num2} => ${result}`
        );
    } catch (error) {
        console.log(
            `${operation} ERROR: ${error.name} - ${error.message}`
        );
    }
}

try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(
        `ERROR: ${error.name} - ${error.message}`
    );
}