"use strict";
class Employees {
    eno;
    ename;
    basicSalary;
    constructor(eno, ename, basicSalary) {
        this.eno = eno;
        this.ename = ename;
        this.basicSalary = basicSalary;
    }
}
class Trainer extends Employees {
    CalSalary(hrs) {
        var totalSal = this.basicSalary + (hrs * 2000);
        console.log(totalSal);
    }
    Greet() {
        return "Welcome" + this.ename;
    }
}
class Admin extends Employees {
    CalSalary(hrs) {
        var totalSal = this.basicSalary + (hrs * 8000);
        console.log(totalSal);
    }
    Greet() {
        return "Welcome" + this.ename;
    }
}
let train = new Trainer(101, " Santhosh", 12000);
train.CalSalary(4);
console.log(train.Greet());

let ad = new Admin(102, " Naveen", 8000);
ad.CalSalary(4);
console.log(ad.Greet());
