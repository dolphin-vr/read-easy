import {
  signInApp,
} from './api-firebase';

  signInApp('test@g.com', '12345678')
    .then(signInAppRes => {
      console.log("signInApp success");
      console.log(signInAppRes);
    })
    .catch(signInAppError => {
      console.log("signInApp wrong");
    });
    
// remove book from shoppinglist
const shoppingRemoveBtn = document.querySelector('.js-shopping-remove-btn');

console.log(shoppingRemoveBtn);
    
shoppingRemoveBtn.addEventListener('click', shoppingRemove);

function shoppingRemove(){
  console.log(shoppingRemoveBtn)
}





