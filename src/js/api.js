// import axios from 'axios';
// import { Notify } from '../../node_modules/notiflix/build/notiflix-notify-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { keyPage } from "./vars";
import {homeMarkup} from "./home"
const keyPage = 'activpage';

const optNotiflx = {
  position: 'center-bottom',
  width: '380px',
  timeout: 5000,
  fontSize: '28px',
};

function showActivePage() {

  let currentPage = JSON.parse(sessionStorage.getItem(keyPage));
  if (currentPage === 'shoppinglist') {
    showShoppingList();
  } else {
    showHomePage();
  }
}

function showShoppingList() {
  sessionStorage.setItem(keyPage, JSON.stringify('shoppinglist'));
}

function showHomePage() {
  sessionStorage.setItem(keyPage, JSON.stringify('homepage'));
  homeMarkup();
}

export { showActivePage };