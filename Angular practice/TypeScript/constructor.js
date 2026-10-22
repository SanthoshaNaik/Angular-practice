"use strict";
class Product {
    productId;
    productName;
    productPrice;
    productState;
    productColor;
    constructor(ProductColor) {
        this.productId = 101;
        this.productName = "Mobile";
        this.productPrice = 65000;
        this.productState = true;
        this.productColor = ProductColor;
    }
    display() {
        console.log(`Product Id: ${this.productId} \nProduct Name: ${this.productName} \nProduct Price: ${this.productPrice}\nProduct State: ${this.productState}\nProduct Color: ${this.productColor}`);
    }
}
let pro = new Product("Black");
pro.display();
