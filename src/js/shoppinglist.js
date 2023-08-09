import { isSignIn } from './api-firebase';
import { bookShopsMurkup, createBookCard } from './shopslist';
import { getStorageShopingList } from './api-shiping-localstorage';
import { removeBookFromShoppingList } from './modal';

import empty from '../img/empty.png';
import empty2x from '../img/empty2x.png';

import './authorization-modal';
import './log-out';

const refs = {
  shoplist: document.querySelector('.shooping-list'),
};

let shoplistMurkup =
  '<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';

const shoppingList = getStorageShopingList();

if (!shoppingList && shoppingList.length === 0) {
  // додати розмітку списка книг
  shoplistMurkup += `<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    This page is empty, add some books and proceed to order.
  </p>
  <img
    srcset="${empty2x} 2x"
    src="${empty}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`;
  // } else if (false) {  //емуляція залогіненого юзера
} else {
  isSignIn().then(isSign => {
    if (!isSign) {
      // додати розмітку порожнього шоплиста з текстом   // Please sign-up to manage your Shopping List
      shoplistMurkup += `<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    Please sign-up to manage your Shopping List
  </p>
  <img
    srcset="${empty2x} 2x"
    src="${empty}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`;
    }
  });
}
// додати розмітку порожнього шоплиста з текстом  // This page is empty, add some books and proceed to order.
shoplistMurkup += '<ul class="book-list">';
shoplistMurkup += shoppingList.map(el => createBookCard(el)).join('');
shoplistMurkup += '</ul>';
refs.shoplist.innerHTML = shoplistMurkup;

// if (shoppingList && shoppingList.length !== 0) {
const trashBtn = document.querySelector('.js-trash');
trashBtn.addEventListener('click', trashBook);
// }
console.log(trashBtn);
function trashBook(evt) {
  const trash = evt.target.closest('.js-trash');
  console.log(trash);
  if (evt.target.closest('.js-trash')) {
    const id = trash.id;
    console.log(id);
    removeBookFromShoppingList(id);
  }
}
