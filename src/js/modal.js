import {
  getCategoryList,
  getTopBooks,
  getCategory,
  getBookById,
} from './api-books';

const refs = {
  openModalBtnEl: document.querySelector('.js-modal-book-open'),
  modalEl: document.querySelector('.js-modal-book-backdrop'),
  shoppingListBtnEl: document.querySelector(
    '.js-modal-book-localstostorage-add-btn'
  ),
};

refs.openModalBtnEl.addEventListener('click', openModalBook);
refs.modalEl.addEventListener('click', closeModalBook);

async function openModalBook(id) {
  try {
    const bookInfo = await getBookById(id);
    const modalBookMarkup = createModalBookMarkup(bookInfo);
    modalEl.innerHTL = modalBookMarkup;
    toggleModalBook();
    document.addEventListener('keydown', closeModalBookOnEsc);
  } catch (err) {
    //     Notiflix.Notify.info('Oops! Something went wrong: no such book was found!');
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
  const shop = buy_links.map(item => item);
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
        <p class="modal-book-info">
         ${description}
        </p>
        <div class="modal-book-linc-box">
          <a href="${shop.url}" class="modal-book-linc" target="_blank">
            <img src="./img/shop1.png" alt="${shop.name}" class="modal-book-linc-icon" />
          </a>
          <a href="" class="modal-book-linc" target="_blank">
            <img src="./img/shop2.png" alt="" class="modal-book-linc-icon" />
          </a>
          <a href="" class="modal-book-linc" target="_blank">
            <img src="./img/shop3.png" alt="" class="modal-book-linc-icon" />
          </a>
        </div>
      </div>
    </div>
    <button class="modal-book-ls-btn js-modal-book-localstostorage-add-btn">
      add to shopping list
    </button>
  </div>`;
}
