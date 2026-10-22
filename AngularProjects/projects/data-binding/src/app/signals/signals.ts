import { Component, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class Signals {

  count=signal(0)

  constructor(){
    effect(()=>{
      console.log("This is Count: ",this.count);
      if(this.count()==10)
      {
        this.count.set(0)
      }
    })
  }

  updateCount()
  {
    this.count.set(this.count()+1)
  }
}
