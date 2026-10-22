import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse } from './productDataType';  

@Service()
export class Products {

    apiUrl="https://dummyjson.com/products"

      private http = inject(HttpClient)

      getProducts()
      {
        return this.http.get<ProductResponse>(this.apiUrl)
      }
}
 