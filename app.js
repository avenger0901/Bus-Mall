import { productData } from './data/product_data.js';
import { ProductArray } from './product-array.js';
export const findById = (someId, someArray) => {
    for (let i = 0 ; i < someArray.length; i++){
        const drink = someArray[i];
        if (drink.id === someId)
            return drink;
    }
};
const productImages = document.querySelectorAll('img');
const products = new ProductArray(productData);


const initializeNewProduct = () => {

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
};

const button = document.getElementById('next-button');

let voteTime = 0;
let voteDetalsArray = [];
button.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const selectProductId = formData.get('products');
    voteTime++;
    console.log(voteTime, '&&&&&&&&&');
    const productVotedArray = findById(selectProductId, voteDetalsArray);
    if (productVotedArray){
        productVotedArray.votes++;
    } else {
        voteDetalsArray.push({
            id: selectProductId,
            votes: 1,
        });
    }
    
    document.querySelector('input[name="products"]:checked').checked = false;
    localStorage.setItem('votes', JSON.stringify(voteDetalsArray));
    initializeNewProduct();
    if (voteTime === 26){
        document.getElementById('hide-image').classList.add('hidden-images');
        var a = document.createElement('a');
        var br = document.createElement('button');
        var linkText = document.createTextNode('Click Here For Vote Results');
        br.appendChild(linkText);
        a.appendChild(br);
        a.title = 'myVotes';
        a.href = './results.html';
        document.body.appendChild(a);
        button.style.display = 'none';
          
    }

});
initializeNewProduct();







