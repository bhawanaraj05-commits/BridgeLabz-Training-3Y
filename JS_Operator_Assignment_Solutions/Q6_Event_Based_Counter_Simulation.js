// Q6: Event-Based Counter Simulation
// These function calls simulate clicks on increment and decrement buttons.

let count = 0;

function increment() {
    // This nested function can access and update count from the outer scope.
    function updateCount() {
        count++;
    }

    updateCount();
    console.log(`Count after increment: ${count}`);
}

function decrement() {
    function updateCount() {
        count--;
    }

    updateCount();
    console.log(`Count after decrement: ${count}`);
}

// Simulated clicks
increment();
increment();
decrement();
