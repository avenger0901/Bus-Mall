import { productData } from './data/product_data.js';
import { ProductArray } from './product-array.js';


const productImages = document.querySelectorAll('img');
const radioInput = document.querySelectorAll('input');



const products = new ProductArray(productData);
let voteTime = 0;
const initializeNewProduct = () => {

    voteTime++;
    let randomProduct1 = products.getRandomProduct();
    let randomProduct2 = products.getRandomProduct();
    let randomProduct3 = products.getRandomProduct();
    
    while (randomProduct1.id === randomProduct2.id || randomProduct1.id === randomProduct3.id){
        randomProduct1 = products.getRandomProduct();
    } 
    while (randomProduct2.id === randomProduct3.id || randomProduct1.id === randomProduct3.id){
        randomProduct3 = products.getRandomProduct();
    } 

    productImages[0].src = randomProduct1.image;
    productImages[1].src = randomProduct2.image;
    productImages[2].src = randomProduct3.image;
    console.log(randomProduct1);
    console.log(randomProduct2);
    console.log(randomProduct3);
    if (voteTime === 25){
        document.querySelector('button').disabled = true;
    }
};
document.querySelector('button').addEventListener('click', (initializeNewProduct));

initializeNewProduct();





