"use strict";
class Employee {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Display() {
        console.log(`Employee Id: ${this.id}\nEmployee Name: ${this.name}\nEmployee Salary: ${this.salary}`);
    }
}
class Trainee extends Employee {
    subject;
    constructor(subject, id, name, salary) {
        super(id, name, salary);
        this.subject = subject;
    }
    Display() {
        super.Display();
        console.log(`Trainee Subject: ${this.subject}`);
    }
}
let obj = new Trainee("Java", 101, "Santhoshh", 80000.00);
obj.Display();
