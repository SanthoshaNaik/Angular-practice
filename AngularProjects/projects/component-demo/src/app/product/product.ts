import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product',
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product {
  proId:number=104;
  proName:String="Mobile";
  ProColor:String="Black";
  proPrice:number=28000;
  
}
