import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event',
  styleUrl: './event.css',
  templateUrl: './event.html',
})
export class Event {
  count=0;

  increment()
  {
    this.count++;
  }

 HandleEvent(eventName:string)
 {
  console.log(eventName);
 }
}
