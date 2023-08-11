const refs = {
  openModalBtn: document.querySelector('.js-authorization-open'),
  closeModalBtn: document.querySelector('.js-authorization-close'),
  modalAuth: document.querySelector('.js-authorization-modal'),
  backdrop: document.querySelector('.js-authorization-backdrop'),
};

refs.openModalBtn.addEventListener('click', toggleModalAuth);
refs.closeModalBtn.addEventListener('click', toggleModalAuth);

function toggleModalAuth() {
  refs.modalAuth.classList.toggle('on-hidden');
  document.addEventListener('keydown', onEscKeyPress);
  refs.modalAuth.addEventListener('click', onClickBackdrop);
}

function onEscKeyPress(e) {
  if (e.key === 'Escape') {
    refs.modalAuth.classList.toggle('on-hidden');
    document.removeEventListener('keydown', onEscKeyPress);
  }
}

function onClickBackdrop(e) {
  if (e.target === refs.backdrop) {
    refs.modalAuth.classList.toggle('on-hidden');
  }
}
