import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-get-and-set',
  styleUrl: './get-and-set.css',
  templateUrl: './get-and-set.html',
})
export class GetAndSet {
  name:WritableSignal<string> =signal('')

  resetValue()
  {
    this.name.set("Santhu")
  }

  setValue(val:string)
  {
    this.name.set(val)
  }
}
