import { isSignIn, signInApp } from './api-firebase';
import { bookShopsMurkup, createBookCard } from './shopslist';
import { getStorageShopingList } from './api-shiping-localstorage';
import emptypng from '../img/empty.png';
// import sprite from "../img/sprite.svg";
import './authorization-modal';
import './log-out';

const refs = {
  shoplist: document.querySelector('.shooping-list'),
};

let shoplistMurkup =
  '<div class="shooping-list"><h1 class="shopping-titel">Shopping <span class="shopping-titel-list">List</span></h1>';

const shoppingList = getStorageShopingList();

if (shoppingList) {
  // додати розмітку списка книг
  shoplistMurkup += '<ul class="book-list">';
  shoplistMurkup += shoppingList.map(el => createBookCard(el)).join('');
  shoplistMurkup += '</ul>';
  // } else if (false) {  //емуляція залогіненого юзера
} else if (isSignIn()) {
  // додати розмітку порожнього шоплиста з текстом   // Please sign-up to manage your Shopping List
  shoplistMurkup += `<div class="shopping-list-empty"><a><p class="shopping-book-empty">Please sign-up to manage your Shopping List</p><img src="${emptypng}" alt="Empty Shopping List" class="shopping-book-empty-img"></a></div>`;
} else {
  // додати розмітку порожнього шоплиста з текстом  // This page is empty, add some books and proceed to order.
  shoplistMurkup += `<div class="shopping-list-empty"><a><p class="shopping-book-empty">This page is empty, add some books and proceed to order.</p><img src="${emptypng}" alt="Empty Shopping List" class="shopping-book-empty-img"></a></div>`;
}

refs.shoplist.innerHTML = shoplistMurkup;

// signInApp('test@g.com', '12345678')
//   .then(signInAppRes => {
//     console.log("signInApp success");
//     console.log(signInAppRes);
//   })
//   .catch(signInAppError => {
//     console.log("signInApp wrong");
//   });

// showShoppingList create markup
// import { getStorageShopingList } from './api-shiping-localstorage';

// const shoplist = [
//    {_id,
//    title,
//    author,
//    list_name,
//    description,
//    book_image,
//    buy_links: [url1, url2, url3]
//    }
// ]

// const listOfBooks =

// <!-- shopping-list page is empty -->
// const emptyPage = document.querySelector(`#page-empty`)
// function showShoppingListEmpty() {
//    console.log(emptyPage);
// }

// remove book from shoppinglist

// const shoppingRemoveBtn = document.querySelector('.js-shopping-remove-btn');

// console.log(shoppingRemoveBtn);

// shoppingRemoveBtn.addEventListener('click', shoppingRemove);

// function shoppingRemove(){
//   console.log(shoppingRemoveBtn)
// }
