"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    const line = i + 1;

    try {
        const record = JSON.parse(rawData[i]);

        if (
            record.user === undefined ||
            record.age === undefined
        ) {
            throw new Error("Missing user or age");
        }

        const age = Number(record.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        const user = { ...record, age };
        clean.push(user);

        if (age < 18) {
            under18.push(user);
        }

        console.log(`Line ${line}: Valid`);
    } catch (error) {
        errors.push({
            line: line,
            message: error.message
        });

        console.log(
            `Line ${line}: Error - ${error.message}`
        );
    }
}

console.log("\nClean data:", clean);
console.log("Errors:", errors);
console.log("Under-18 users:", under18);