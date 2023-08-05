const refs = {
  openModalBtnEl: document.querySelector('.js-modal-book-open'),
  modalEl: document.querySelector('.js-modal-book-backdrop'),
};

refs.openModalBtnEl.addEventListener('click', openModalBook);
refs.modalEl.addEventListener('click', closeModalBook);

function openModalBook() {
  toggleModalBook();
  document.addEventListener('keydown', closeModalBookOnEsc);
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
