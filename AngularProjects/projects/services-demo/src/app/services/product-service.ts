import { Service } from '@angular/core';

@Service()
export class ProductService {

    getProduct()
    {
        return[
            {id:1,name:"mobile",price:20000},
            {id:2,name:"Laptop",price:40000},
            {id:3,name:"Bike",price:200000},
            {id:4,name:"car",price:100000}
        ]
    }
}
