class Employee
{
    id:number;
    name:string;
    salary:number;

    constructor(id:number,name:string,salary:number)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    Display()
    {
        console.log(`Employee Id: ${this.id}\nEmployee Name: ${this.name}\nEmployee Salary: ${this.salary}`);
    }
}
class Trainee extends Employee
{
    subject:String;
    constructor(subject:string,id:number,name:string,salary:number)
    {
        //to call parent class constructor
        super(id,name,salary);
        this.subject=subject;
    }

    Display(){
        //to call parent class method
        super.Display();
        console.log(`Trainee Subject: ${this.subject}`);
    }
}

let obj:Trainee= new Trainee("Java",101,"Santhoshh",80000.00);
obj.Display();