abstract class Employees{
    eno:number;
    ename:string;
    protected basicSalary:number;

    constructor(eno:number,ename:string,basicSalary:number)
    {
        this.eno=eno;
        this.ename=ename;
        this.basicSalary=basicSalary;
    }
    abstract CalSalary(hrs:number):void;
    abstract Greet():String;
}

class Trainer extends Employees
{
    CalSalary(hrs:number)
    {
        var totalSal= this.basicSalary+(hrs*2000);
        console.log(totalSal);
    }

    Greet()
    {
        return"Welcome"+this.ename;
    }
}

class Admin extends Employees
{
    CalSalary(hrs:number)
    {
        var totalSal= this.basicSalary+(hrs*8000);
        console.log(totalSal);
    }

    Greet()
    {
        return"Welcome"+this.ename;
    }
}

let train:Trainer= new Trainer(101," Santhosh",12000);
train.CalSalary(4);
console.log(train.Greet());

let ad:Admin= new Admin(102," Naveen",8000);
ad.CalSalary(4);
console.log(ad.Greet());