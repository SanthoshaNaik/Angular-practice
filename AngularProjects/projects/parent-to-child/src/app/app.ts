import { Component, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  imports: [RouterOutlet, Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('parentToChild');
  users = signal(['santhosh', 'Harshith', 'naveen', 'mega']);
  
  newUser = signal('')

  

  addUser() {
    
    if (this.newUser()) {
      this.users.update((data) => ([...data, this.newUser()]))
    }
    this.newUser.set('')
  }

removeUser(index:number)
  {
    this.users.update((users)=>users.filter((user,i)=>i!=index))
  }


}
