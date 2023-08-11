import { isSignIn, signInApp } from './api-firebase';
import { bookShopsMurkup, createBookCard } from './shopslist';
import { getStorageShopingList } from './api-shiping-localstorage';
import { removeBookFromShoppingList } from './modal';
import { showShoppingList } from './api';

import empty from '../img/empty.png';
import empty2x from '../img/empty2x.png';


function shoppingListMarkup(elemRef){

  let markup = '<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';

  if (!isSignIn()) {
    elemRef.innerHTML = markup + noauthShoppingListMarkup();
    return
  }

  const shoppingList = getStorageShopingList();
  if (!shoppingList || shoppingList.length === 0){
    elemRef.innerHTML = markup + emptiShoppingListMarkup();
    return
  }

}

function noauthShoppingListMarkup(){
  return `<div class="shopping-list-empty"><p class="shopping-book-empty">Please sign-up to manage your Shopping List</p><img srcset="${empty2x} 2x" src="${empty}" alt="Empty Shopping List" class="shopping-book-empty-img"loading="lazy"/></div>`;
}
function emptiShoppingListMarkup(){
  return `<div class="shopping-list-empty"><p class="shopping-book-empty">This page is empty, add some books and proceed to order.</p><img srcset="${empty2x} 2x"src="${empty}"alt="Empty Shopping List"class="shopping-book-empty-img"loading="lazy"/></div>`;
}

function pagingShoppingListMarkup(shoppingList){
  let markup = '<ul class="book-list-items"></ul>'; //book-list
  let countShopingList = shoppingList.length;
  let countPagesShopingList = Math.ceil(
    countShopingList / PAGINATION_COUNT_ITEMS
  );
  let counterPagesShopingList = 1;
  if (countPagesShopingList > 1) {
    markup += `<div class="shopping-list-pagination">
      <button class="shopping-list-btn shopping-list-start" type="button" > << </button>
      <button class="shopping-list-btn shopping-list-back" type="button" > < </button>`;
    if (countPagesShopingList == 2) {
      markup += `
            <button class="shopping-list-btn shopping-list-middle shopping-list-middle1" type="button" >1</button>
            <button class="shopping-list-btn shopping-list-middle shopping-list-middle2" type="button" >2</button>`;
    } else {
      markup += `
        <button class="shopping-list-btn shopping-list-middle shopping-list-middle1" type="button" >1</button>
        <button class="shopping-list-btn shopping-list-middle shopping-list-middle2" type="button" >2</button>
        <button class="shopping-list-btn shopping-list-middle shopping-list-middle3" type="button" >3</button>`;
    }

    markup += `
      <button class="shopping-list-forward shopping-list-btn" type="button" > > </button>
      <button class="shopping-list-end shopping-list-btn" type="button" > >> </button>
    </div> `;
  }
}

// if (!shoppingList && shoppingList.length === 0) {
//   shoplistMurkup += `<div class="shopping-list-empty">  <p class="shopping-book-empty">    This page is empty, add some books and proceed to order.  </p>  <img    srcset="${empty2x} 2x"    src="${empty}"    alt="Empty Shopping List"    class="shopping-book-empty-img"  /></div>`;
// } else {
//   isSignIn().then(isSign => {
//     if (!isSign) {
//       shoplistMurkup += `<div class="shopping-list-empty">  <p class="shopping-book-empty">    Please sign-up to manage your Shopping List  </p>  <img    srcset="${empty2x} 2x"    src="${empty}"    alt="Empty Shopping List"    class="shopping-book-empty-img"  /></div>`;
//     }
//   });
// }
// shoplistMurkup += '<ul class="book-list">';
// shoplistMurkup += shoppingList.map(el => createBookCard(el)).join('');
// shoplistMurkup += '</ul>';
// refs.shoplist.innerHTML = shoplistMurkup;

// if (shoppingList && shoppingList.length !== 0) {
const trashBtn = document.querySelector('.js-trash');
trashBtn.addEventListener('click', trashBook);
// }

function trashBook(evt) {
  const trash = evt.target.closest('.js-trash');
  if (evt.target.closest('.js-trash')) {
    const id = trash.id;
    removeBookFromShoppingList(id);
  }
}


export {shoppingListMarkup}