// Q3: Math Utility Dashboard
// Display a few useful calculations for the given number.

const x = 16.75;

const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`
Math Utility Dashboard
----------------------
Number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x³): ${cube.toFixed(3)}
Random number (10–50): ${randomNumber}
`);
