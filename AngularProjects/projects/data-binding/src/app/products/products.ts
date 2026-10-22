import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
   proId:number=104;
  proName:String="Mobile";
  ProColor:String="Black";
  proPrice:number=28000;
  inStock:boolean=false;
}
