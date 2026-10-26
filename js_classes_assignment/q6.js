class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 30000),
    new Employee(2, "Riya", "HR", 25000),
    new Employee(3, "Rahul", "Sales", 28000),
    new Employee(4, "Neha", "IT", 40000),
    new Employee(5, "Ravi", "Finance", 35000)
];

employees[0].applyBonus(10);

employees.forEach(e => {
    console.log(e.name + ": ₹" + e.getAnnualSalary());
});

const totalPayout = employees.reduce(
    (total, e) => total + e.getAnnualSalary(), 0
);

console.log("Total Annual Payout: ₹" + totalPayout);
