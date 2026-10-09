"use strict";
function demo() {
    let EmpId = 101;
    let Name = "Santhosh";
    let Salary = 7462.00;
    let State = true;
    //let EmpInfo:String="EmpId:"+EmpId+"\nName: "+Name+"\nSalary: "+Salary+"\nEmpState: "+State;
    let EmpInfo = `EmpId ${EmpId}`;
    console.log(EmpInfo);
}
demo();
