"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const emp of employees) {
    try {
        if (
            !emp.name ||
            emp.salary === undefined ||
            emp.years === undefined
        ) {
            throw new Error("Missing employee details");
        }

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or experience");
        }

        const bonus = years > 3
            ? salary * 0.10
            : salary * 0.05;

        console.log(
            `${emp.name}: Salary = ₹${salary}, ` +
            `Years = ${years}, Bonus = ₹${bonus}, ` +
            `Total = ₹${salary + bonus}`
        );
    } catch (error) {
        console.log("Error:", error.message);
    }
}