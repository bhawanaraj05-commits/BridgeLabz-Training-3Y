class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    getFormData(values) {
        const data = {};

        this.fields.forEach((field, index) => {
            data[field.name] = values[index];
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

const form = new FormBuilder(fields);

const values = ["Bhawana", "bhawana@example.com", "Hello@123"];

console.log(form.getFormData(values));
