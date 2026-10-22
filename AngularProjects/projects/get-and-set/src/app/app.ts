import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetAndSet } from './get-and-set/get-and-set';
import { ControlStatements } from './control-statements/control-statements';

@Component({
  imports: [RouterOutlet,GetAndSet,ControlStatements],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('GetAndSet');
}
