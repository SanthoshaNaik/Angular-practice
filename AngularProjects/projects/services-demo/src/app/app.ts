import { Component, inject, signal, type Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product-service'

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ServicesDemo');

  productDetails:any=signal('')

  product = inject(ProductService)

  ngOnInit()
  {
  //  let data=this.product.getProduct()
  //   console.log(data)
  //   this.productDetails.set(data)
  
  }

  getDetails()
  {
    let data=this.product.getProduct()
    console.log(data)
    this.productDetails.set(data)
  }
}
