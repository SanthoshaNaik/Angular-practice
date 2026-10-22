class Employee
{
    //Properties
    EmpId:number=101;
    Ename:string="Santhosh";
    EmpSalary:number=5445.00;

    //Method
    Display():void
    {
        console.log(`Employee Id: ${this.EmpId} Employee Name: ${this.Ename} Employee Salary: ${this.EmpSalary}`);
    }

    //Function
    greet(name:string):string
    {
        return "welcome "+name;
    }

    Salary():number
    {
        return this.EmpSalary;
    }


}
    let Emp:Employee= new Employee();
    Emp.Display();
    let GreetMsg:string=Emp.greet("SANTHU");
    console.log(GreetMsg)
    Emp.Salary();