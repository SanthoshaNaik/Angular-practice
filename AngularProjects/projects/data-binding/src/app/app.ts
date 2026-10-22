import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './products/products';
import { Event } from './event/event';
import { Signals } from './signals/signals';
import { ComputedSignals } from './computed-signals/computed-signals';
import { Effect } from './effect/effect';

@Component({
  imports: [RouterOutlet,Products,Event,Signals,ComputedSignals,Effect],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('DataBinding');
}
