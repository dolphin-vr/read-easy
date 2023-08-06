// import axios from 'axios';
// import { Notify } from '../../node_modules/notiflix/build/notiflix-notify-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { keyPage } from "./vars";

const optNotiflx = {
  position: 'center-bottom',
  width: '380px',
  timeout: 5000,
  fontSize: '28px',
};

// const configAx = {
//    method: 'get',
//    baseURL: 'https://books-backend.p.goit.global/',
// params: {
//   key: '38368366-a7227dffd937457d386778604',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   per_page: 40,
// },
//  };

// async function serviceGetTopBooks() {
//   try {
//     const { data } = await axios('/books/top-books', configAx);
//     Notify.failure(`Wrong set userName`, optNotiflx);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

function showActivePage() {
  // let currentPage = null;

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
}

export { showActivePage };