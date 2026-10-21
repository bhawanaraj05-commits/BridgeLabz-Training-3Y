// Q8: Employee Salary Projection
// Calculate salary for the next five years with an annual increment.

let salary = 40000;
const annualIncrementRate = 8;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * annualIncrementRate / 100;
    salary = Math.round(salary);

    salaryProjection.push({
        Year: year,
        "Projected Salary (₹)": salary
    });
}

console.table(salaryProjection);
