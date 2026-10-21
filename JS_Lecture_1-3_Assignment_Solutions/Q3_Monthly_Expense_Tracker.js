// Q3: Monthly Expense Tracker
// Add five expense categories, calculate the average, and add 10% tax.

const expenses = [
    { category: "Food", amount: 3500 },
    { category: "Travel", amount: 1200 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
const averageExpense = totalExpense / expenses.length;
let finalAmount = totalExpense;

finalAmount += finalAmount * 0.10; // Add 10% tax to the total.

console.log(`Total expenses: ₹${totalExpense.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
