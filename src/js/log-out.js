import {
  isSignIn,
  removeAccount,
  removeAccountInfo,
  signOutApp,
  getUserName,
} from './api-firebase';

const signUpBtn = document.querySelector('.signup');

// --- getUserName ---

if (isSignIn()) {
  getUserName()
    .then(getUserNameRes => {
      const userName = getUserNameRes.data().name;
      signUpBtn.textContent = userName;
      console.log(`User is signed in as ${userName}`);
    })
    .catch(getUserNameError => {
      console.log('getUserName wrong');
      console.log(getUserNameError.code);
    });
} else {
  signUpBtn.textContent = 'Sign up';
}
