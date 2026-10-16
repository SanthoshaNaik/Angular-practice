"use strict";
class Employee {
    //Properties
    EmpId = 101;
    Ename = "Santhosh";
    EmpSalary = 5445.00;
    //Method
    Display() {
        console.log(`Employee Id: ${this.EmpId} Employee Name: ${this.Ename} Employee Salary: ${this.EmpSalary}`);
    }
    //Function
    greet(name) {
        return "welcome " + name;
    }
    Salary() {
        return this.EmpSalary;
    }
}
let Emp = new Employee();
Emp.Display();
let GreetMsg = Emp.greet("SANTHU");
console.log(GreetMsg);
Emp.Salary();
