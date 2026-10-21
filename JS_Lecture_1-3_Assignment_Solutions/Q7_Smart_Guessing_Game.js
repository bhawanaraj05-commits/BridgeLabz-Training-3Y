// Q7: Smart Guessing Game
// Compare a test guess with a random secret number from 1 to 50.

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24; // Change this value to test different guesses.

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    const difference = Math.abs(userGuess - secretNumber);

    if (difference <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log(`Secret number (for testing): ${secretNumber}`);
