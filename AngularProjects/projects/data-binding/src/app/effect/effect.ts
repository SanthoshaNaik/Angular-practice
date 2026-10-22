import { Component, effect, signal, WritableSignal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  imports: [],
  selector: 'app-effect',
  styleUrl: './effect.css',
  templateUrl: './effect.html',
})
export class Effect {

  speed=signal(0)
  fruit=signal("Apple")
  color="Black"
  users:WritableSignal<string[]>=signal<string[]>(["santhosh","harshith"]);

  constructor()
  {
    effect(()=>{
      if(this.speed()>=0 && this.speed()<80 )
      {
        this.color='Yellow'
      }
      if(this.speed()>=80 && this.speed()<120 )
      {
        this.color='green'
      }
      if(this.speed()>=120 && this.speed()<180 )
      {
        this.color='red'
      }
      console.log("Speed: ",this.speed())
    })

    effect(()=>{

      console.log("Fruit: ",this.fruit())
    })
  }

  updateSpeed()
  {
    this.speed.set(this.speed()+10)
  }

  changeFruit()
  {
    this.fruit.set('Banana')
  }

  handleupdate()
  {
    this.users.update((item)=>[...item,'naveen']);
    console.log(this.users())
  }
}
