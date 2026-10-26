const name = "Bhawana";
const email = "bhawana@example.com";
const phone = "9876543210";
const password = "Hello@123";

const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/;

function validate(value, regex, field) {
    if (regex.test(value)) {
        console.log(field + " is valid");
    } else {
        console.log(field + " is invalid");
    }
}

validate(name, nameRegex, "Name");
validate(email, emailRegex, "Email");
validate(phone, phoneRegex, "Phone");
validate(password, passwordRegex, "Password");

