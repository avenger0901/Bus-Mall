import { productData } from './data/product_data.js';
import { ProductArray } from './product-array.js';

const productImages = document.querySelectorAll('img');
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
    
    const radio1 = document.getElementById('product-1');
    const radio2 = document.getElementById('product-2');
    const radio3 = document.getElementById('product-3');
    const productName1 = document.getElementById('name1');
    const productName2 = document.getElementById('name2');
    const productName3 = document.getElementById('name3');
    radio1.value = randomProduct1.id;
    radio2.value = randomProduct2.id;
    radio3.value = randomProduct3.id;
    productName1.textContent = randomProduct1.Name;
    productName2.textContent = randomProduct2.Name;
    productName3.textContent = randomProduct3.Name;

 
    if (voteTime === 26){
        document.getElementById('three-products').classList.add('hidden-images');
    }

};

const form = document.querySelector('form');
const button = document.getElementById('next-button');

button.addEventListener('click', (e) => {
    e.preventDefault();



   

});
initializeNewProduct();







