const refs = {
  openModalBtn: document.querySelector('.js-authorization-open'),
  closeModalBtn: document.querySelector('.js-authorization-close'),
  modalAuth: document.querySelector('.js-authorization-modal'),
  backdrop: document.querySelector('.js-authorization-backdrop'),
};

refs.openModalBtn.addEventListener('click', openModalAuth);
refs.closeModalBtn.addEventListener('click', closeModalAuth);

function openModalAuth() {
  refs.modalAuth.classList.remove('on-hidden');
  document.addEventListener('keydown', onEscKeyPress);
  refs.modalAuth.addEventListener('click', onClickBackdrop);
}

function closeModalAuth() {
  refs.modalAuth.classList.add('on-hidden');
  document.removeEventListener('keydown', onEscKeyPress);
  refs.modalAuth.removeEventListener('click', onClickBackdrop);
}

function onEscKeyPress(e) {
  if (e.key === 'Escape') {
    closeModalAuth();
  }
}

function onClickBackdrop(e) {
  if (e.target === refs.backdrop) {
    closeModalAuth();
  }
}
