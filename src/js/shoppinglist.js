import {
  signInApp,
} from './api-firebase';

  signInApp('test@g.com', '12345678')
    .then(signInAppRes => {
      console.log("signInApp success");
      console.log(signInAppRes);
    })
    .catch(signInAppError => {
      console.log("signInApp wrong");
    });

// showShoppingList create markup

import sprite from "../img/sprite.svg";

function showShoppingList() {
  sessionStorage.setItem(keyPage, JSON.stringify('shoppinglist'));
}
function createShoppinglistBookMarkup(resp) {
  const { book_image, list_name, author,publisher, description, buy_links } = resp;
   const shop = buy_links.map(item => item);
  return `<div class="shooping-list-container" id="shooping-list-container">
   <h1 class="shopping-titel">Shopping <span class="shopping-titel-list">List</span></h1>
   <ul class="shopping-box">
   <li class="shopping-card">
      <a href="#" class="button-trash js-shopping-remove-btn">
         <svg width="18" height="18">
            <use href="${sprite}#trash"></use>
         </svg>
      </a>
      <img src="${book_image}" alt="${list_name}" class="shopping-book-img" />
      <div>
         <h2 class="shopping-book-name">${list_name}</h2>
         <p class="shopping-book-category">${publisher}</p>
         <div class="shopping-book-info">
            <p> ${description}</p>
         </div>
         <div class="shop-box">
            <p class="shopping-book-autor">${author}</p>
      <div class="shop-linc-box">
         <a href="${shop.url}" class="shop-linc" target="_blank">
            <img src="./img/shop1.png" alt="${shop.name}" class="shop-linc-icon amazon" />
         </a>
         <a href="" class="shop-linc" target="_blank">
            <img src="./img/shop2.png" alt="${shop.name}" class="shop-linc-icon" />
         </a>
         <a href="" class="shop-linc" target="_blank">
            <img src="./img/shop3.png" alt="${shop.name}" class="shop-linc-icon" />
         </a>
      </div>
         </div>
      </div>
   </li>
   </ul>

   </div>`;
}
 
// <!-- shopping-list page is empty -->
const emptyPage = document.querySelector(`#page-empty`)
function showShoppingListEmpty() {
   console.log(emptyPage);
}




// remove book from shoppinglist

const shoppingRemoveBtn = document.querySelector('.js-shopping-remove-btn');

console.log(shoppingRemoveBtn);
    
// shoppingRemoveBtn.addEventListener('click', shoppingRemove);

function shoppingRemove(){
  console.log(shoppingRemoveBtn)
}





