import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-employee',
  styleUrl: './employee.css',
  templateUrl: './employee.html',
})
export class Employee {
  stId:number=101;
  stname:string="Santhosh";
  stMarks:number=88;
  Result:boolean=true;
}
