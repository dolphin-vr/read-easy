import {
  createAccount,
  setUserName,
  getUserName,
  signInApp,
} from './api-firebase';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = {
  form: document.querySelector('.authorization-form'),
  name: document.querySelector('#authorization-text'),
  mail: document.querySelector('#authorization-mail'),
  password: document.querySelector('#authorization-password'),
  buttonSignUp: document.querySelector('.authorization-sign-up-btn'),
  buttonSignIn: document.querySelector('.authorization-sign-in-btn'),
  modal: document.querySelector('.js-authorization-modal'),

  link: document.querySelectorAll('.authorization-link'),
};

// createAccount ----------------------------------------------------------------------------

form.buttonSignUp.addEventListener('click', e => {
  e.preventDefault();
  createAccount(form.mail.value, form.password.value)
    .then(createAccountRes => {
      console.log(`createAccount success`);
      console.log(createAccountRes);
      setUserName(form.name.value)
        .then(setUserNameRes => {
          //Тут рахуємо що все добре!
          console.log(`setUserName success `);
          // console.log(setUserNameRes);
          console.log(`Account created`);
          initUserName();

          form.modal.classList.toggle('on-hidden');
        })
        .catch(setUserNameError => {
          console.log(`setUserName wrong "${setUserNameError.code}"`);
          removeAccount()
            .then(removeAccountRes => {
              console.log('removeAccount success');
              console.log(removeAccountRes);
            })
            .catch(removeAccountError => {
              console.log('removeAccount wrong');
              console.log(removeAccountError.code);
            });
        });
    })
    .catch(createAccountError => {
      Notify.failure(`createAccount wrong "${createAccountError.code}"`);
      if (createAccountError.code === 'auth/email-already-in-use') {
        Notify.failure('Change auth/email');
      } else if (createAccountError.code === 'auth/invalid-email') {
        Notify.failure('Wrong auth/email');
      } else if (createAccountError.code === 'auth/missing-email') {
        Notify.failure('Enter email');
      } else if (createAccountError.code === 'auth/missing-password') {
        Notify.failure('Enter password');
      } else {
        Notify.failure('Wrong');
      }
    });
});

// signIn-------------------------------------------------------------------------------------------
import { initUserName } from './log-out';

form.buttonSignIn.addEventListener('click', e => {
  e.preventDefault();
  signInApp(form.mail.value, form.password.value)
    .then(signInAppRes => {
      console.log(`signInApp success `);
      console.log(signInAppRes);
      form.modal.classList.toggle('on-hidden');
      initUserName();
      //Тут рахуємо що все добре!
    })
    .catch(signInAppError => {
      Notify.failure(`createAccount wrong "${signInAppError.code}"`);
      if (signInAppError.code === 'auth/user-not-found') {
        Notify.failure('Not user');
      } else if (signInAppError.code === 'auth/invalid-email') {
        Notify.failure('Wrong auth/email');
      } else if (signInAppError.code === 'auth/missing-email') {
        Notify.failure('Enter email');
      } else if (signInAppError.code === 'auth/missing-password') {
        Notify.failure('Enter password');
      } else if (signInAppError.code === 'auth/wrong-password') {
        Notify.failure('Wrong password');
      } else {
        Notify.failure('Wrong');
      }
    });
});

// Переключання sign-in, sign-up ------------------------------------------------------------------------

form.link[0].addEventListener('click', onLinkClick);
form.link[1].addEventListener('click', onLinkClick);

form.link[1].classList.add('authorization-link-active');
form.name.classList.add('on-hidden');

function onLinkClick(e) {
  if (this === form.link[0]) {
    // Виконуємо дії для SIGN UP
    form.link[1].classList.remove('authorization-link-active');
    form.link[0].classList.add('authorization-link-active');
    form.name.classList.remove('on-hidden');
    form.buttonSignUp.classList.remove('on-hidden');
    form.buttonSignIn.classList.add('on-hidden');
  } else if (this === form.link[1]) {
    // Виконуємо дії для SIGN IN
    form.link[0].classList.remove('authorization-link-active');
    form.link[1].classList.add('authorization-link-active');
    form.name.classList.add('on-hidden');
    form.buttonSignUp.classList.add('on-hidden');
    form.buttonSignIn.classList.remove('on-hidden');
  }
}
