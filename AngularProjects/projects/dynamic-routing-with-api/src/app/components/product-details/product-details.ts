import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../services/products';
import { Product } from '../../services/productDataType';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {

  productData=signal<Product | undefined>(undefined )
  constructor(private route:ActivatedRoute,private products:Products)
  {

  }

  ngOnInit()
  {
    let prodId=this.route.snapshot.paramMap.get('id')
    this.products.getProducts().subscribe((data)=>{
      console.log(data.Products);
      data.products.filter((item)=>{
        if(item.id.toString()==prodId){
          console.log(item);
          this.productData.set(item)
          
        }
      })
      
    })
    
  }
  
}
