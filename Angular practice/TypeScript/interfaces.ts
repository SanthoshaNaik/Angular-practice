interface Iemplyoee
{
    eno:number;
    name:string;
    sal:number;

    Display():void;

}
interface Address
{
    city:string;
    doorNo:number;
    
}
abstract class Trainer implements Iemplyoee, Address
{
    eno:number;
    name:string;
    sal:number;
    city: string;
    doorNo: number;
    


    constructor()
    {
        this.eno=12;
        this.name="santhosh";
        this.sal=1254;
        this.city="Bengaluru";
        this.doorNo=16;

    }
    
    
    
   abstract Display():void;
    
}

class Angular extends Trainer
{
    Display() {
        console.log(`Name: ${this.name} Salary: ${this.sal}`);
    }
}

let an:Angular= new Angular();
an.Display();