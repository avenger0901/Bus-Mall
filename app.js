import { productData } from './data/product_data.js';
import { ProductArray } from './product-array.js';


const productImages = document.querySelectorAll('img');
const radioInput = document.querySelectorAll('input');
const nextButton = document.getElementById('next-button');


const products = new ProductArray(productData);
let voteTime = 0;

nextButton.addEventListener('click', () => {

    voteTime++;


});

const initializeNewProduct = () => {
    let randomProduct1 = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();
    console.log(randomProduct1);
    console.log(randomProduct2);
    console.log(randomProduct3);
    
    if (randomProduct1.id === randomProduct2.id){
        randomProduct1 = products.getRandomProduct;
    } else if (randomProduct1.id === randomProduct3.id){
        randomProduct3 = products.getRandomProduct;
    } else (randomProduct2.id === randomProduct3.id);
    randomProduct2 = products.getRandomProduct;
    productImages[0].src = randomProduct1.image;
    productImages[1].src = randomProduct2.image;
    productImages[2].src = randomProduct3.image;
};





initializeNewProduct();