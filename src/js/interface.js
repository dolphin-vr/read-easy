import { homeMarkup } from './home';
import { hendlerClick } from './modal';
import { showShoppingList } from './api';
import { shoppedBooksMarkup, trashBook } from './shopslist';
const keyPage = 'activpage';

const refs = {
   catlisSec: document.querySelector('.js-catlist'),
   fundsSec: document.querySelector('.js-funds'),
   mainSec: document.querySelector('.js-main'),
   btnHome: document.querySelector('.btnHome'),
   btnSL: document.querySelector('.btnSL'),
   modalEl: document.querySelector('.js-modal-book-backdrop'),
 };


function initGoTopButton() {
  const goTopBtn = document.getElementById('goTopBtn');
  goTopBtn.addEventListener('click', goTopPage);

  window.onscroll = () => {
    const viewPortHeight = window.innerHeight * 0.4;
    if (
      document.body.scrollTop > viewPortHeight ||
      document.documentElement.scrollTop > viewPortHeight
    ) {
      goTopBtn.style.display = 'block';
    } else {
      goTopBtn.style.display = 'none';
    }
  };
}

function goTopPage() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(goTopPage, 5);
  }
}

function showActivePage() {
  //  console.dir('catlist= ', refs.catlisSec)
  let currentPage = JSON.parse(sessionStorage.getItem(keyPage));
  if (currentPage === 'shoppinglist') {
    // console.log('if showShoppingList')
    showShoppingList();
  } else {
    // console.log('if showHomePage')
    showHomePage();
  }
}

function showHomePage() {
//   console.log('func showHomePage');
  refs.catlisSec.classList.replace('hidden', 'category');
  sessionStorage.setItem(keyPage, JSON.stringify('homepage'));
  homeMarkup();
  refs.mainSec.addEventListener('click', hendlerClick);
}


export { initGoTopButton, showActivePage };
