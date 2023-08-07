import { createAccount, signInApp } from './api-firebase';

const form = {
  form: document.querySelector('.authorization-form'),
  name: document.querySelector('#authorization-text'),
  mail: document.querySelector('#authorization-mail'),
  password: document.querySelector('#authorization-password'),
  buttonSignUp: document.querySelector('.authorization-sign-up-btn'),
  buttonSignIn: document.querySelector('.authorization-sign-in-btn'),

  link: document.querySelectorAll('.authorization-link'),
};

// createAccount ----------------------------------------------------------------------------

form.buttonSignUp.addEventListener('click', () => {
  const register = createAccount(
    form.mail.value,
    form.password.value,
    form.name.value
  );
  console.log(register);
});

// signIn-------------------------------------------------------------------------------------------

form.buttonSignIn.addEventListener('click', () => {
  const answer = signInApp(form.mail.value, form.password.value);
  console.log(answer);
});

// Переключання sign-in, sign-up ------------------------------------------------------------------------

form.link[0].addEventListener('click', onLinkClick);
form.link[1].addEventListener('click', onLinkClick);

form.link[0].classList.add('authorization-link-active');

function onLinkClick(e) {
  e.preventDefault();

  if (this === form.link[1]) {
    // Виконуємо дії для SIGN UP
    form.link[0].classList.remove('authorization-link-active');
    form.link[1].classList.add('authorization-link-active');
    form.name.classList.add('is-hidden');
    form.buttonSignUp.classList.add('is-hidden');
    form.buttonSignIn.classList.remove('is-hidden');
  } else if (this === form.link[0]) {
    // Виконуємо дії для SIGN IN
    form.link[1].classList.remove('authorization-link-active');
    form.link[0].classList.add('authorization-link-active');
    form.name.classList.remove('is-hidden');
    form.buttonSignUp.classList.remove('is-hidden');
    form.buttonSignIn.classList.add('is-hidden');
  }
}
