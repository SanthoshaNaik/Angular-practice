import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-control-statements',
  styleUrl: './control-statements.css',
  templateUrl: './control-statements.html',
})
export class ControlStatements {
  isLoggedIn = signal(true);

  username = signal('Santhosh');

  students = signal(['Rahul', 'Priya', 'Naveen']);

  role = 'Doctor';

}
