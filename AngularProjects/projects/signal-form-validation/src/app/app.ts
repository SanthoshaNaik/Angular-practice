import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {email, form, FormField, maxLength, minLength, required} from '@angular/forms/signals'
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet,CommonModule,FormField ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('signalFormValidation');

  loginModule=signal({
    email:'',
    password:''
  })

  loginForm=form(this.loginModule,(field)=>{
    required(field.email,{message:"Please enter email adrress"});
    minLength(field.email,5,{message:"Please enter valid email"});
    email(field.email,{message:"enter valid email address"});
    required(field.password,{message:"Please enter password"});
    minLength(field.password,5,{message:"Please enter valid password"});
    maxLength(field.password,10,{message:"Please enter valid password"});



  })

  login()
  {
    console.log(this.loginForm.email().value())
    console.log(this.loginForm.password().value())
  }

  reset()
  {
    this.loginForm.email().value.set('')
    this.loginForm.password().value.set('')
  }

  
}
