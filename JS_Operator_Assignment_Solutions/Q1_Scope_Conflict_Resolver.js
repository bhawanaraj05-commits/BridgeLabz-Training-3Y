// Q1: Scope Conflict Resolver
// The bonus is global, so it can be accessed inside calculateSalary().
// isPermanent is local to the function and decides whether the bonus is added.

let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000; // Local salary variable

    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${salary}`);
}

calculateSalary(true);
calculateSalary(false);

// Changing the local isPermanent argument does not change the global bonus.
console.log(`Global bonus is still: ₹${bonus}`);
