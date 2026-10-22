import { Component, inject, signal } from '@angular/core';
import type { Product } from '../../services/productDataType';
import { Products } from '../../services/products';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
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
