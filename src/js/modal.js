const refs = {
  openModalBtnEl: document.querySelector('.js-modal-open'),
  modalEl: document.querySelector('.js-modal-backdrop'),
  closeModalBtnEL: document.querySelector('.js-modal-close-btn'),
};
console.log(refs.openModalBtnEl);
refs.openModalBtnEl.addEventListener('click', openModal);
refs.closeModalBtnEL.addEventListener('click', closeModal);

function openModal() {
  refs.modalEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function closeModal() {
  refs.modalEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
export { openModal, closeModal}
