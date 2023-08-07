const refs = {
  openModalBtn: document.querySelector('.js-authorization-open'),
  closeModalBtn: document.querySelector('.js-authorization-close'),
  modal: document.querySelector('.js-authorization-modal'),
  backdrop: document.querySelector('.js-authorization-backdrop'),
  btnmodal: document.querySelector('.btnmodal')
};


refs.btnmodal.addEventListener('click', toggleModal);

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', onEscKeyPress);
refs.modal.addEventListener('click', onClickBackdrop);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function onEscKeyPress(e) {
  if (e.key === 'Escape') {
    refs.modal.classList.toggle('is-hidden');
    document.removeEventListener('keydown', onEscKeyPress);
  }
}

function onClickBackdrop(e) {
  if (e.target === refs.backdrop) {
    refs.modal.classList.toggle('is-hidden');
  }
}
