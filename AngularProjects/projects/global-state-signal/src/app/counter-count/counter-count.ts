import { Component } from '@angular/core';
import { Counter } from '../store/counter';

@Component({
  imports: [],
  selector: 'app-counter-count',
  styleUrl: './counter-count.css',
  templateUrl: './counter-count.html',
})
export class CounterCount {
  constructor(public state:Counter)
    {
      
    }
}
