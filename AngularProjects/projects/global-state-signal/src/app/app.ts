import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCount } from './display-count/display-count';
import { CounterCount } from './counter-count/counter-count';

@Component({
  imports: [RouterOutlet,DisplayCount,CounterCount],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('GlobalStateSignal');
}
