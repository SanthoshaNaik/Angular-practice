import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Students } from './students/students';
import { Employee } from './employee/employee';
import { Product } from './product/product';

@Component({
  imports: [RouterOutlet,Employee,Students,Product],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ComponentDemo');
}
