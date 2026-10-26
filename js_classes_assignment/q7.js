const username = "Bhawana";
const password = "Hello@123";

const errors = [];

if (username.length < 5) {
    errors.push("Username must have at least 5 characters");
}

if (password.length < 8) {
    errors.push("Password must have at least 8 characters");
}
if (!/[A-Z]/.test(password)) {
    errors.push("Password needs an uppercase letter");
}
if (!/[a-z]/.test(password)) {
    errors.push("Password needs a lowercase letter");
}
if (!/[0-9]/.test(password)) {
    errors.push("Password needs a number");
}
if (!/[^A-Za-z0-9\s]/.test(password)) {
    errors.push("Password needs a special character");
}

if (errors.length === 0) {
    console.log("Login validation successful");
} else {
    errors.forEach(error => console.log(error));
}
