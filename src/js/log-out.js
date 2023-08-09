import {
  isSignIn,
  removeAccount,
  removeAccountInfo,
  signOutApp,
  getUserName,
} from './api-firebase';

const signUpBtn = document.querySelector('.sign-up-button');

// --- getUserName ---

const initUserName = async () => {
  const signIN = await isSignIn();
  if (signIN) {
    getUserName()
      .then(getUserNameRes => {
        signUpBtn.textContent = getUserNameRes.data().name;
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
