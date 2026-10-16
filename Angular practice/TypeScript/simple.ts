function demo()
{
    let EmpId:number=101;
    let Name:string="Santhosh";
    let Salary:number=7462.00;
    let State:boolean=true;

    //let EmpInfo:String="EmpId:"+EmpId+"\nName: "+Name+"\nSalary: "+Salary+"\nEmpState: "+State;

    let EmpInfo:string=`EmpId ${EmpId}`;

    console.log(EmpInfo);


}
demo();