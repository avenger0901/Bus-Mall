export class ProductArray {
    constructor(products){
        this.products = products.slice();
    }

    getProducts() {
        return this.products;
    }

    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
        return this.products[randomProductIndex];
    }


}