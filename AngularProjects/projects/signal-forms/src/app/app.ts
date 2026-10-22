import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {email, form, FormField, maxLength, minLength, required} from '@angular/forms/signals'

@Component({
  imports: [RouterOutlet,FormField],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('SignalForms');

  loginModule=signal({email:'',password:''})

  loginForm=form(this.loginModule)

  submitForm()
  {
    console.log(this.loginForm().value())
  }

  Reset()
  {
    this.loginModule.set({email:"",password:""})
  }
}
