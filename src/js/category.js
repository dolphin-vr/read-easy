import {getCategoryList, getTopBooks, getCategory, getBookById} from "./api-books"
import { openModal, closeModal} from "./modal"
const categoryList = document.querySelector(".js-category-list")
const booksList = document.querySelector(".best-category")
const modalBook = document.querySelector(".modal-book")
getCategoryList()
.then(resp => {
    if (!resp.statusText === "OK") {
        throw new Error(resp.statusText)
    }
    const arrayOfCategories = resp.data
    const markupCategoriesList = arrayOfCategories.map(category => 
        `
    <li><a href="" class="category-link">${category.list_name}</a></li>
    `
    ).join("")
    categoryList.insertAdjacentHTML("beforeend", markupCategoriesList);
    const itemLinks = document.querySelectorAll(".category-link");
        itemLinks.forEach((link) => {
            link.addEventListener("click", function (event) {
              event.preventDefault();
              document.querySelectorAll(".selected-category").forEach((selectedLink) => {
                selectedLink.classList.remove("selected-category");
              });
      
              link.classList.add("selected-category");
              if (event.target.textContent === "All categories") {
                getTopBooks()
                .then(resp => {
                    
                })
              } else {
                     getCategory(event.target.textContent)
              .then(resp => {
                const booksOfCategory = resp.data
              console.log(resp);
              const markupCategoriesBooks = booksOfCategory.map(book => `
              <li class="book-thumb">
              <a href="" class="book-link" id="${book._id}"> 
                <img class="img-book" src="${book.book_image}" alt="book-test" />
        <p class="book-name">${book.title}</p>
        <p class="author">${book.author}</p>
              </a>
      </li>
              `).join("")
              booksList.innerHTML = markupCategoriesBooks
              const booksWithId = document.querySelectorAll(".book-link")
              booksWithId.forEach(bookFromList => {
                bookFromList.addEventListener("click", function (event) {
                  event.preventDefault()
getBookById(event.currentTarget.id)
.then(resp => {
  console.log(resp);
const modalMarkup = 
`
<img src="${resp.data.book_image}" alt="" class="modal-book-img" />
<div class="modal-book-info-wrap">
  <h2 class="modal-book-name">${resp.data.title}</h2>
  <p class="modal-book-autor">${resp.data.author}</p>
  <p class="modal-book-info">
  ${resp.data.description}
  </p>
  <div class="modal-linc-box">
    <a href="" class="modal-linc" target="_blank">
      <svg class="modal-linc-svg">
        <use href=""></use>
      </svg>
    </a>
    <a href="" class="modal-linc" target="_blank">
      <svg class="modal-linc-svg">
        <use href=""></use>
      </svg>
    </a>
    <a href="" class="modal-linc" target="_blank">
      <svg class="modal-linc-svg">
        <use href=""></use>
      </svg>
    </a>
  </div>
</div>
`
modalBook.innerHTML = modalMarkup
  openModal()
})
.catch(err => console.log(err))
                })
              })
             })
             .catch(err => console.log(err)) 
              }
            });
          });
})
.catch(err => console.log(err))





