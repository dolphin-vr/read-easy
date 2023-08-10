import { isSignIn, signInApp } from './api-firebase';
import { bookShopsMurkup, createBookCard } from './shopslist';
import { getStorageShopingList } from './api-shiping-localstorage';
import { removeBookFromShoppingList } from './modal';

import empty from '../img/empty.png';
import empty2x from '../img/empty2x.png';

// import './authorization-modal';
import './log-out';
import { showShoppingList } from './api';

const refs = {
  shoplist: document.querySelector('.shopping-list'),
};

function shoppinglistMarkup() {
// SL title  
let shoplistMarkup ='<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';
const login =true;
// if not signed in  true false
if (!login){
  shoplistMarkup += `<div class="shopping-list-empty">
  <p class="shopping-book-empty">Please sign-up to manage your Shopping List</p>
  <img srcset="${empty2x} 2x" src="${empty}" alt="Empty Shopping List" class="shopping-book-empty-img"  />
  </div>`;
  return shoplistMarkup
}

const shoppingList = getStorageShopingList();

// SL absent or empty
if (!shoppingList || shoppingList.length === 0) {
shoplistMarkup += `<div class="shopping-list-empty">
<p class="shopping-book-empty">This page is empty, add some books and proceed to order.</p>
<img srcset="${empty2x} 2x" src="${empty}" alt="Empty Shopping List" class="shopping-book-empty-img"/>
</div>`;
return shoplistMarkup
}

shoplistMarkup += '<ul class="book-list">';
shoplistMarkup += shoppingList.map(el => createBookCard(el)).join('');
shoplistMarkup += '</ul>';

return shoplistMarkup
}

// if (shoppingList && shoppingList.length !== 0) {
// const trashBtn = document.querySelector('.js-trash');
// trashBtn.addEventListener('click', trashBook);
// }
function trashBook(evt) {
  const trash = evt.target.closest('.js-trash');
  if (trash) {
    console.log('trash= ', trash.id)
    removeBookFromShoppingList(trash.id);
    showShoppingList()
  }
}


export {shoppinglistMarkup, trashBook}