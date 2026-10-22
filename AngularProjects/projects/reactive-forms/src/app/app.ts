import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ReactiveForms');

  name= new FormControl("")
  email= new FormControl("")
  password= new FormControl("")

  Login()
  {
    console.log("Name: ",this.name.value)
    console.log("EmailId : ",this.email.value,"\nPassword: ",this.password.value)
  }

  Reset()
  {
    this.name.setValue("")
    this.email.setValue("")
    this.password.setValue("")
  }
}
