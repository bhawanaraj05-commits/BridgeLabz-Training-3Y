"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

class NegativeAmountError extends Error {}
class MissingFieldError extends Error {}
class NullTransactionError extends Error {}

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    try {
        if (transaction === null) {
            throw new NullTransactionError("Null transaction");
        }

        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new MissingFieldError("Missing id or amount");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Negative amount");
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);
    } catch (error) {
        invalid.push({
            row: i + 1,
            type: error.constructor.name,
            message: error.message
        });

        console.log(
            `Row ${i + 1}: ${error.constructor.name} - ${error.message}`
        );
    }
}

console.log("\nValid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful:", valid.length);
console.log("Failed:", invalid.length);

// Debug: breakpoint par i, transaction, valid aur invalid ko Watch mein dekho.