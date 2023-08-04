const form = {
  formEl: document.querySelector('.authorization-form'),
  nameEl: document.querySelector('#authorization-text'),
  mailEl: document.querySelector('#authorization-mail'),
  passwordEL: document.querySelector('#authorization-password'),
  buttonEl: document.querySelector('.authorization-btn'),
  link: document.querySelectorAll('.authorization-link'),
};

// Переключання sign-in, sign-up

// form.link[0].addEventListener('click', onLinkClick);
// form.link[1].addEventListener('click', onLinkClick);

// form.link[0].classList.add('authorization-link-active');

// function onLinkClick(e) {
//   form.link[0].classList.toggle('authorization-link-active');
//   form.nameEl.classList.toggle('is-hidden');
//   form.link[1].classList.toggle('authorization-link-active');
// }

// Збирання даних форми

form.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const name = e.currentTarget[0].value;
  const mail = e.currentTarget[1].value;
  const password = e.currentTarget[2].value;

  console.log('name', name);
  console.log('mail', mail);
  console.log('password', password);
}
