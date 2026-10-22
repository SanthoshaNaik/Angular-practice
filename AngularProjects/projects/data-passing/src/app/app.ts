import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentToChild } from '../parent-to-child/parent-to-child';

@Component({
  imports: [RouterOutlet,ParentToChild],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 protected readonly title = signal('DataPassing');

  users=signal(["sanhosh","hari","naveen","mega"])
  newUser=signal('')

  addUser()
  {
    this.users.update((data)=>([...data,this.newUser()]))
  }
}
