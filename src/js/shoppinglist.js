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
   buy_links: [url1, url2, url3]
   }
]
   
const listOfBooks = shoplist.map(el => createBookCard(el)).join('');

function   createBookCard(book){
   return `<li class="shopping-card">
      <button class="button-trash js-trash" aria-label="Close window" type="button"  id="${book._id}><svg class="icon"><use href="${sprite}#trash"></use></svg></button>
      <img src="${book.book_image}" alt="${book.titel}" class="shopping-book-img" />
         <div class="card-item"
         <p class="shopping-book-name">${book.titel}</p>
         <p class="shopping-book-category">${book.list_name}</p>
         <div class="shopping-book-info">
         <p> ${book.description}</p>
         </div>
         <p class="book-author">${book.author}</p>
         </div>${bookShopsMurkup(book.shops)}
         </li>`
}
 function bookShopsMurkup(shops) {
   
const iconPaths = [
   {
     name: "Amazon",
     path: shop1png,
   },
   {
     name: "Apple Books",
     path: shop2png,
   },
   {
     name: "Bookshop",
     path: shop3png,
   }
 ];

 return 'shops list'
}
// <!-- shopping-list page is empty -->
const emptyPage = document.querySelector(`#page-empty`)
function showShoppingListEmpty() {
   console.log(emptyPage);
}

// remove book from shoppinglist

const shoppingRemoveBtn = document.querySelector('.js-shopping-remove-btn');

console.log(shoppingRemoveBtn);
    
// shoppingRemoveBtn.addEventListener('click', shoppingRemove);

function shoppingRemove(){
  console.log(shoppingRemoveBtn)
}





