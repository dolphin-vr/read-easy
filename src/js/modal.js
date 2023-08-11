import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getBookById } from './api-books';
import {
  setStorageShopingList,
  getStorageShopingList,
} from './api-shiping-localstorage';
import amazon from '../img/shop1.png';
import appleBook from '../img/shop2.png';
import bookShop from '../img/shop3.png';
import amazon2x from '../img/shop1x2.png';
import appleBook2x from '../img/shop2x2.png';
import bookShop2x from '../img/shop3x2.png';
import { isSignIn, signInApp } from './api-firebase';
import icon from '../img/sprite.svg';

const refs = {
  modalEl: document.querySelector('.js-modal-book-backdrop'),
  // booksList: document.querySelector('.book-list'), //mainSec
};

// refs.booksList.addEventListener('click', hendlerClick);
refs.modalEl.addEventListener('click', closeModalBook);

function hendlerClick(evt) {
  evt.preventDefault();
  const currentBook = evt.target.closest('.book-link');
  // console.log(currentBook.id);
  // console.dir('currentBook', currentBook);
  if (evt.target.closest('.book-link')) {
    const bookId = currentBook.id;
    openModalBook(bookId);
  }
}
async function openModalBook(id) {
  try {
    toggleModalBook();
    const bookInfo = await getBookById(id);
    const modalBookMarkup = createModalBookMarkup(bookInfo.data);
    refs.modalEl.innerHTML = modalBookMarkup;
    const modalText = document.querySelector('.modal-book-text');
    const addShoppingListBtnEl = document.querySelector(
      '.js-modal-book-localstostorage-add-btn'
    );
    const removeShoppingListBtnEl = document.querySelector(
      '.js-modal-book-localstostorage-remove-btn'
    );
    isSignIn().then(isSign => {
      if (!isSign) {
        addShoppingListBtnEl.disabled = true;
        addShoppingListBtnEl.style.pointerEvents = 'none';
        modalText.textContent =
          'You need to log in to add a book to the shopping list!';
        isHiddenToggle(modalText);
        refs.modalEl.classList.add('no-scroll');
      }
    });
    if (isInSoppinList(id)) {
      isHiddenToggle(addShoppingListBtnEl);
      isHiddenToggle(removeShoppingListBtnEl);
      isHiddenToggle(modalText);
    }
    addShoppingListBtnEl.addEventListener('click', () => {
      addBookToShoppingList(bookInfo.data);
      isHiddenToggle(addShoppingListBtnEl);
      isHiddenToggle(removeShoppingListBtnEl);
      isHiddenToggle(modalText);
    });
    removeShoppingListBtnEl.addEventListener('click', () => {
      removeBookFromShoppingList(id);
      isHiddenToggle(addShoppingListBtnEl);
      isHiddenToggle(removeShoppingListBtnEl);
      isHiddenToggle(modalText);
    });
    // toggleModalBook();
    document.addEventListener('keydown', closeModalBookOnEsc);
  } catch (err) {
    Notify.failure(`${err.messsage}`);
  }
}
function closeModalBook(evt) {
  if (
    evt.target.classList.contains('js-modal-book-backdrop') ||
    evt.target.closest('.js-modal-book-close-btn')
  ) {
    toggleModalBook();
  }
}
function closeModalBookOnEsc(evt) {
  if (evt.code === 'Escape') {
    toggleModalBook();
    document.removeEventListener('keydown', closeModalBookOnEsc);
  }
}
function toggleModalBook() {
  refs.modalEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
function isHiddenToggle(el) {
  el.classList.toggle('is-hidden');
}
function isInSoppinList(id) {
  const ls = getStorageShopingList();
  if (!ls) {
    return;
  }
  const booksId = ls.map(book => book._id);
  return booksId.includes(id);
}
function addBookToShoppingList(obj) {
  let ls = getStorageShopingList();
  if (!ls) {
    ls = [];
  }
  ls.push(obj);
  setStorageShopingList(ls);
}
function removeBookFromShoppingList(id) {
  const ls = getStorageShopingList();
  const booksId = ls.map(book => book._id);
  const idx = booksId.indexOf(id);
  ls.splice(idx, 1);
  setStorageShopingList(ls);
}

function createModalBookMarkup(resp) {
  const { book_image, title, author, description, buy_links, _id } = resp;
  return ` <div class="modal-book" id="${_id}">
  <button type="button" class="modal-book-close-btn js-modal-book-close-btn">
    <svg class="modal-book-close-svg">
      <use href="${icon}#close"></use>
    </svg>
  </button>
  <div class="modal-book-wrap">
    <img src="${book_image}" alt="${title}" class="modal-book-img" />
    <div class="modal-book-info-wrap">
      <h2 class="modal-book-name">${title}</h2>
      <p class="modal-book-autor">${author}</p>
      <p class="modal-book-info">${description}</p>
      <div class="modal-book-linc-box">
        <a href="${buy_links[0].url}" class="modal-book-linc" target="_blank" rel="noreferrer noopener">
          <img
            srcset="${amazon2x} 2x"
            src="${amazon}"
            alt="${buy_links[0].name}"
            class="modal-book-linc-icon amazon"
          />
        </a>
        <a href="${buy_links[1].url}" class="modal-book-linc" target="_blank" rel="noreferrer noopener">
          <img
            srcset="${appleBook2x} 2x"
            src="${appleBook}"
            alt="${buy_links[1].name}"
            class="modal-book-linc-icon"
          />
        </a>
        <a href="https://bookshop.org/" class="modal-book-linc" target="_blank" rel="noreferrer noopener">
          <img
            srcset="${bookShop2x} 2x"
            src="${bookShop}"
            alt="${buy_links[4].name}"
            class="modal-book-linc-icon"
          />
        </a>
      </div>
    </div>
  </div>
  <button class="modal-book-ls-btn js-modal-book-localstostorage-add-btn">
    add to shopping list
  </button>
  <button
    class="modal-book-ls-btn remove js-modal-book-localstostorage-remove-btn is-hidden"
  >
    remove from the shopping list
  </button>
  <p class="modal-book-text is-hidden">
    Сongratulations! You have added the book to the shopping list. To delete,
    press the button “Remove from the shopping list”.
  </p>
</div>`;
}
export { hendlerClick, openModalBook, closeModalBook, removeBookFromShoppingList };
