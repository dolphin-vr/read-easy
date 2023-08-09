import {
  isSignIn,
  removeAccount,
  removeAccountInfo,
  signOutApp,
  getUserName,
} from './api-firebase';
import userFoto from '../img/user2-40.png';
import iconLogout from '../img/sprite.svg';

const signUpWrap = document.querySelector('.sign-up');
const signUpBtn = document.querySelector('.sign-up-button');

// --- getUserName ------------------------------------------

export const initUserName = async () => {
  const signIN = await isSignIn();
  if (signIN) {
    getUserName()
      .then(getUserNameRes => {
        const userName = getUserNameRes.data().name;
        addUserBtn(userName);

        console.log(getUserNameRes.data().name);
        //Тут рахуємо що все добре і данні є!
      })
      .catch(getUserNameError => {
        console.log('getUserName wrong');
        console.log(getUserNameError.code);
      });
  }
};

initUserName();

// -------- create user button ----------------------------------------
function addUserBtn(userName) {
  let userFotoAdd = `
          <button type="button" class="user-btn">
          <img src="${userFoto}" alt="userFoto" class="user-foto"/>
          ${userName}
          <svg class="user-icon">
            <use href="${iconLogout}#ddown"></use>
          </svg>
          </button>
        `;
  signUpBtn.classList.add('is-hidden');
  signUpWrap.insertAdjacentHTML('beforeend', userFotoAdd);

  const userBtn = document.querySelector('.user-btn');
  userBtn.addEventListener('click', onUserBtnEl);
}

// -------- create log-out button ----------------------------------------

function onUserBtnEl(e) {
  console.log('onUserBtnEL');
  console.log(e.composedPath());
  const userBtnEl = document.querySelector('.user-btn');

  const logoutBtn = `
      <button class="logout-btn">
        Log out
        <svg class="logout-icon">
          <use href="${iconLogout}#loginout"></use>
        </svg>
      </button>
    `;
  userBtnEl.insertAdjacentHTML('beforeend', logoutBtn);

  userBtnEl.removeEventListener('click', onUserBtnEl);
  const logoutBtnEl = document.querySelector('.logout-btn');
  setTimeout(() => document.addEventListener('click', onLogoutBtn), 200);
}

//------------ log-out function----------------------------------------

function onLogoutBtn(evt) {
  console.log('onLogoutBtn');
  console.log(evt.composedPath());
  const userBtnEl = document.querySelector('.user-btn');
  const logoutBtnEl = document.querySelector('.logout-btn');
  console.log(evt.composedPath().includes(logoutBtnEl));
  if (evt.composedPath().includes(logoutBtnEl)) {
    signOutApp();
    console.log('logout');
    userBtnEl.removeChild(logoutBtnEl);
    signUpWrap.removeChild(userBtnEl);
    signUpBtn.classList.remove('is-hidden');
  } else {
    userBtnEl.removeChild(logoutBtnEl);
    signUpWrap.removeChild(userBtnEl);
    initUserName();
  }

  document.removeEventListener('click', onLogoutBtn);
}
