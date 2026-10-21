// Q9: Odd–Even Number Analyzer
// Classify each number from 1 through 30 and save the results in an array.

const results = [];

for (let number = 1; number <= 30; number++) {
    let classification;

    // Check FizzBuzz first so multiples of both 3 and 5 are handled correctly.
    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push(`${number}: ${classification}`);
}

console.log(results);
