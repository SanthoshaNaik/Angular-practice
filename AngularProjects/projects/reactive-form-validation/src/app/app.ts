import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule,FormGroup, Validators } from '@angular/forms';

@Component({
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ReactiveFormValidation');

  LoginForm= new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(5)]),
  })

  get name()
  {
    return this.LoginForm.get("name")
  }

  get email()
  {
    return this.LoginForm.get("email")
  }

  get password()
  {
    return this.LoginForm.get("password")
  }

  handleProfile()
  {
    console.log(this.LoginForm.value)
  }
  Reset()
  {
    this.LoginForm.setValue({
      name:'',
      email:'',
      password:''
    })
  }

  
}
