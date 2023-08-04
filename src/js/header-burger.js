const menuBtn = document.querySelector('.menu-btn');
const backdrop = document.querySelector('.backdrop[data-menu]');
const imgMenu = menuBtn.querySelector('.img-menu');

menuBtn.addEventListener('click', () => {
  const isMenuOpen = menuBtn.getAttribute('data-menu-open') === 'true';

  if (isMenuOpen) {
    // Закрийте модальне вікно, якщо воно відкрите
    backdrop.classList.add('is-hidden');
    menuBtn.setAttribute('data-menu-open', 'false');
    menuBtn.setAttribute('aria-expanded', 'false');
    imgMenu.src = '../img/align-left (1).jpg'; // початкове зображення кнопки
  } else {
    // Відкрийте модальне вікно, якщо воно закрите
    backdrop.classList.remove('is-hidden');
    menuBtn.setAttribute('data-menu-open', 'true');
    menuBtn.setAttribute('aria-expanded', 'true');
    imgMenu.src = '../img/x-close (1).jpg'; //  нове зображення кнопки
  }
});