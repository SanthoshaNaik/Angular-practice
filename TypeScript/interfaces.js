"use strict";
class Trainer {
    eno;
    name;
    sal;
    city;
    doorNo;
    constructor() {
        this.eno = 12;
        this.name = "santhosh";
        this.sal = 1254;
        this.city = "Bengaluru";
        this.doorNo = 16;
    }
}
class Angular extends Trainer {
    Display() {
        console.log(`Name: ${this.name} Salary: ${this.sal}`);
    }
}
let an = new Angular();
an.Display();
