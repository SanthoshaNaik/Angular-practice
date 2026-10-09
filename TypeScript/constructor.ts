class Product
{
    productId:number;
    productName:string;
    productPrice:number;
    productState:boolean;
    productColor:string;


    constructor(ProductColor:string)
    {
        this.productId=101;
        this.productName="Mobile";
        this.productPrice=65000;
        this.productState=true;
        this.productColor=ProductColor;

    }

    display()
    {
        console.log(`Product Id: ${this.productId} \nProduct Name: ${this.productName} \nProduct Price: ${this.productPrice}\nProduct State: ${this.productState}\nProduct Color: ${this.productColor}`)
    }
}

let pro:Product = new Product("Black");
pro.display();