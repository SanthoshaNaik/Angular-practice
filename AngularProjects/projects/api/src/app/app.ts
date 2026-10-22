import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products'
import { Product } from './services/productDataType'


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('API');

  productData=signal<Product[] | undefined>(undefined )

  productsService=inject(Products)

  ngOnInit()
  {
    this.productsService.getProducts().subscribe({
      next: (data)=>{
      console.log(data.products)
      this.productData.set(data.products)
      },
      error: (error) => {
        console.error('API error:', error);
      }
      
    })
  }
}
