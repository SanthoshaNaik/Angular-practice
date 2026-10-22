import { Component, computed, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-computed-signals',
  styleUrl: './computed-signals.css',
  templateUrl: './computed-signals.html',
})
export class ComputedSignals {

   hieght=signal(40)
   width=signal(100)
   area=computed(()=>this.hieght()*this.width())
   constructor()
   {
    effect(()=>
    console.log("Area is:",this.area()))
   }


   UpdateHieght()
   {
    this.hieght.set(this.hieght()+10)
   }
}
