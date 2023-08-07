import './js/modal';
import './js/authorization-modal';
import './js/header-burger';
// import './js/authorization';
// import './js/shoppinglist';

import { homeMarkup } from './js/home';
import { showActivePage } from './js/api';
import {getCategoryList, getTopBooks, getCategory, getBookById} from "./js/api-books"
const categoryList = document.querySelector(".js-category-list")
const booksList = document.querySelector(".book-list")
const modalBook = document.querySelector(".modal-book")
showActivePage();
homeMarkup()
.then(resp => {
    const btn = document.querySelectorAll(".btn-see-more")
    btn.forEach(button => {
  button.addEventListener("click", function (event) {
  
    getCategory(event.target.getAttribute('data-category-name'))
                .then(resp => {
                  const booksOfCategory = resp.data
                console.log(booksOfCategory);
                const arrayOfWordsOfCategory = event.target.getAttribute('data-category-name').split(" ")
  
                const lastWordFromCategory = arrayOfWordsOfCategory.length - 1
                 const categoryNameWithoutLastWord = arrayOfWordsOfCategory.slice(0, lastWordFromCategory).join(" ")
                 const itemLinks = document.querySelectorAll(".category-link");
                 document.querySelectorAll(".selected-category").forEach((selectedLink) => {
                  selectedLink.classList.remove("selected-category")
                })
                 itemLinks.forEach((link) => {
  if (event.target.getAttribute('data-category-name') === link.textContent) {
      link.classList.add("selected-category");
  }
                 })
               
                let markupCategoriesBooks = `
                <h1 class="book-list-title">${categoryNameWithoutLastWord} <span class="spn-books">${arrayOfWordsOfCategory[lastWordFromCategory]}</span>
      </h1>
      <ul class="category-ul">`
      booksOfCategory.forEach(book => {
  // сформувати рядочок лішки 
   markupCategoriesBooks += 
        ` 
        
      <li class="book-thumb-category">
              <a href="" class="book-link" id="${book._id}"> 
            <img class="img-book-category" src="${book.book_image}" alt="book-test" />
         <p class="book-name">${book.title}</p>
         <p class="author">${book.author}</p>
               </a>
       </li>
        `
      })
      markupCategoriesBooks += "</ul>"
                booksList.innerHTML = markupCategoriesBooks
                const booksWithId = document.querySelectorAll(".book-link")
                booksWithId.forEach(bookFromList => {
                  bookFromList.addEventListener("click", function (event) {
                    event.preventDefault()
                  })
                })
               })
               .catch(err => console.log(err)) 
  })
  
    })
  })
