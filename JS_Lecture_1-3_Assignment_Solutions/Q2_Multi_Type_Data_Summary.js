// Q2: Multi-Type Data Summary
// Store examples of common JavaScript data types and show their types.

const userName = "Alok";
const age = 20;
const isStudent = true;
const subjects = ["JavaScript", "HTML", "CSS"];
const user = { name: "Alok", course: "B.Tech CSE" };
const middleName = null;
let optionalValue;

const dataSummary = [
    { label: "User name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Is student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: JSON.stringify(subjects), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "User object", value: JSON.stringify(user), type: typeof user },
    { label: "Middle name", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "Optional value", value: String(optionalValue), type: typeof optionalValue }
];

console.table(dataSummary);
