const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

function updateUser(name, email, age) {
    user.name = name;
    user.email = email;
    user.age = age;

    console.log("Updated User Object:");
    console.log(user);
}

updateUser("Bhawana", "bhawana@mail.com", 21);
