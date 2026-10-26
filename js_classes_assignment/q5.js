const name = "Bhawana";
const email = "bhawana@example.com";
const seats = 3;

const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!nameRegex.test(name)) {
    console.log("Invalid name");
} else if (!emailRegex.test(email)) {
    console.log("Invalid email");
} else if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
    console.log("Seats must be between 1 and 10");
} else {
    const booking = { name, email, seats };
    console.log("Booking Successful");
    console.log(booking);
}
