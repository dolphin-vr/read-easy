import {
  isSignIn,
  removeAccount,
  removeAccountInfo,
  signOutApp,
  getUserName,
} from './api-firebase';

const signUpWrap = document.querySelector('.js-sign-up');
const signUpBtn = document.querySelector('.js-sign-up-btn');
const userBtn = document.querySelector('.js-user-btn');
const textBtn = userBtn.querySelector('.js-user-text-btn');
const logoutBtn = document.querySelector('.js-logout-btn');

// --- getUserName ------------------------------------------

export const initUserName = async () => {
  const signIN = await isSignIn();
  if (signIN) {
    getUserName()
      .then(getUserNameRes => {
        const userName = getUserNameRes.data().name;
        addUserBtn(userName);

        // console.log(getUserNameRes.data().name);
        //Тут рахуємо що все добре і данні є!
      })
      .catch(getUserNameError => {
        // console.log('getUserName wrong');
        // console.log(getUserNameError.code);
      });
  }
};

initUserName();

// -------- create user button ----------------------------------------
function addUserBtn(userName) {
  signUpBtn.classList.add('on-hidden');

  userBtn.classList.remove('on-hidden');
  textBtn.textContent = userName;
  userBtn.addEventListener('click', onUserBtnEl);
}

// -------- create log-out button ----------------------------------------

function onUserBtnEl(e) {
  logoutBtn.classList.remove('on-hidden');

  userBtn.removeEventListener('click', onUserBtnEl);
  setTimeout(() => document.addEventListener('click', onLogoutBtn), 200);
}

//------------ log-out function----------------------------------------

function onLogoutBtn(evt) {
  if (evt.composedPath().includes(logoutBtn)) {
    signOutApp();
    signUpBtn.classList.remove('on-hidden');
    userBtn.classList.add('on-hidden');
    logoutBtn.classList.add('on-hidden');
  } else {
    logoutBtn.classList.add('on-hidden');

    initUserName();
  }

  document.removeEventListener('click', onLogoutBtn);
}
