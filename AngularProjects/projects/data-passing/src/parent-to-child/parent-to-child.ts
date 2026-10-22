import { Component, Input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-parent-to-child',
  styleUrl: './parent-to-child.css',
  templateUrl: './parent-to-child.html',
})
export class ParentToChild {
  
@Input() username?:string

}
