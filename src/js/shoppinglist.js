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

const getStorageShopingList = () => {
  return JSON.parse(localStorage.getItem(KEY_SHOPINGLIST));
};

// showShoppingList create markup
import sprite from "../img/sprite.svg";

const shoplist = [
   {_id,
   title,
   author,
   list_name,
   description,
   book_image,
   buy_links,
   }
]

 function bookShopsMurkup(shops) { 
const buy_links = [
   {
      "name": "Amazon",
      "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
    },
   {
      "name": "Apple Books",
      "url": "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
    },
   {
      "name": "Bookshop",
      "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
    },
 ];
 return 'shops list'
}
   
const listOfBooks = shoplist.map(el => createBookCard(el)).join('');

function   createBookCard(book){
   return `<li class="shop-card">
      <button class="button-trash js-trash" aria-label="Close window" type="button"  id="${book._id}><svg class="icon"><use href="${sprite}#trash"></use></svg></button>
      <img src="${book.book_image}" alt="${book.title}" class="shop-book-img" />
         <div class="card-item"
         <p class="shop-book-name">${book.title}</p>
         <p class="shop-book-category">${book.list_name}</p>
         <div class="shop-book-info">
         <p> ${book.description}</p>
         </div>
         <p class="book-author">${book.author}</p>
         </div>${bookShopsMurkup(book.buy_links)}
         </li>`
}
 
// remove book from shoppinglist

const shoppingRemoveBtn = document.querySelector('.js-trash');

console.log(shoppingRemoveBtn);
    
// shoppingRemoveBtn.addEventListener('click', shoppingRemove);

function shoppingRemove(){
  console.log(shoppingRemoveBtn)
}





