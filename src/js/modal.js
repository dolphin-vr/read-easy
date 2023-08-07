import { getBookById } from './api-books';
import {
  createAccount,
  setUserName,
  signInApp,
  isSignIn,
  signOutApp,
  removeAccount,
  removeAccountInfo,
  getUserShoppingList,
  updateUserShoppingList,
  getUserName,
  getUserEmail,
  returnAuth,
} from './api-firebase';

const refs = {
  openModalBtnEl: document.querySelector('.js-modal-book-open'),
  modalEl: document.querySelector('.js-modal-book-backdrop'),
  booksList: document.querySelector('.book-list'),
};

refs.booksList.addEventListener('click', hendlerClick);
// refs.openModalBtnEl.addEventListener('click', openModalBook);
refs.modalEl.addEventListener('click', closeModalBook);

function hendlerClick(evt) {
  const currentBook = evt.target.closest('.book-link');
  const bookId = currentBook.id;
  openModalBook(bookId);
}
async function openModalBook(id) {
  try {
    const bookInfo = await getBookById(id);
    console.log(bookInfo.data.buy_links);
    const modalBookMarkup = createModalBookMarkup(bookInfo.data);
    refs.modalEl.innerHTML = modalBookMarkup;
    const modalText = document.querySelector('.modal-book-text');
    const adShoppingListBtnEl = document.querySelector(
      '.js-modal-book-localstostorage-add-btn'
    );
    const removeShoppingListBtnEl = document.querySelector(
      '.js-modal-book-localstostorage-remove-btn'
    );
    adShoppingListBtnEl.addEventListener('click', () => {});
    removeShoppingListBtnEl.addEventListener('click', () => {});
    toggleModalBook();
    document.addEventListener('keydown', closeModalBookOnEsc);
  } catch (err) {
    //     Notiflix.Notify.info('Oops! Something went wrong: no such book was found!');
    console.log(err);
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
export { openModalBook, closeModalBook };

function createModalBookMarkup(resp) {
  const { book_image, list_name, author, description, buy_links } = resp;
  return ` <div class="modal-book">
    <button type="button" class="modal-book-close-btn js-modal-book-close-btn">
      <svg class="modal-book-close-svg">
        <use href="./img/sprite.svg#close"></use>
      </svg>
    </button>
    <div class="modal-book-wrap">
      <img src="${book_image}" alt="${list_name}" class="modal-book-img" />
      <div class="modal-book-info-wrap">
        <h2 class="modal-book-name">${list_name}</h2>
        <p class="modal-book-autor">${author}</p>
        <p class="modal-book-info"> ${description}</p>
        <div class="modal-book-linc-box">
          <a href="${buy_links[0].url}" class="modal-book-linc" target="_blank">
            <img src="./img/shop1.png" alt="${buy_links[0].name}" class="modal-book-linc-icon" />
          </a>
          <a href="${buy_links[1].url}" class="modal-book-linc" target="_blank">
            <img src="./img/shop2.png" alt="${buy_links[1].name}" class="modal-book-linc-icon" />
          </a>
          <a href="${buy_links[4].url}" class="modal-book-linc" target="_blank">
            <img src="./img/shop3.png" alt="${buy_links[4].name}" class="modal-book-linc-icon" />
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
