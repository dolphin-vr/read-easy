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

function shoppedBooksMarkup(shoppingList) {
  return shoppingList.map(el => createBookCard(el)).join('');
}

function trashBook(evt) {
  const trash = evt.target.closest('.js-trash');
  if (trash) {
    // console.log('trash= ', trash.id);
    removeBookFromShoppingList(trash.id);
    showShoppingList();
  }
}

export { shoppedBooksMarkup, trashBook };
