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

const refs = {
  catlisSec: document.querySelector('.js-catlist'),
  fundsSec: document.querySelector('.js-funds'),
  mainSec: document.querySelector('.js-main'),
  btnHome: document.querySelector('.btnHome'),
  btnSL: document.querySelector('.btnSL'),
}

refs.btnHome.addEventListener('click', showHomePage);
refs.btnSL.addEventListener('click', showShoppingList);

function showActivePage() {
 console.dir('catlist= ', refs.catlisSec)
  let currentPage = JSON.parse(sessionStorage.getItem(keyPage));
  if (currentPage === 'shoppinglist') {
    console.log('if showShoppingList')
    showShoppingList();
  } else {
    console.log('if showHomePage')
    showHomePage();
  }
}

function showShoppingList() {
  console.log('func showShoppingList')
  refs.catlisSec.classList.replace('category', 'hidden');
  sessionStorage.setItem(keyPage, JSON.stringify('shoppinglist'));
}

function showHomePage() {
  console.log('func showHomePage')
  refs.catlisSec.classList.replace('hidden', 'category');
  sessionStorage.setItem(keyPage, JSON.stringify('homepage'));
  homeMarkup();
}

export { showActivePage };