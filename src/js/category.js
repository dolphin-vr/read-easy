import { getCategoryList, getTopBooks, getCategory, getBookById } from "./api-books"
import { homeMarkup } from './home';
const categoryList = document.querySelector(".js-category-list")
const booksList = document.querySelector(".book-list")
const modalBook = document.querySelector(".modal-book")

function onBtnClickCategory(event) {
categoryMarkupByName(event.currentTarget.getAttribute('data-category-name'))
document.querySelectorAll(".selected-category").forEach((selectedLink) => {
  selectedLink.classList.remove("selected-category")
})
const itemLinks = document.querySelectorAll(".category-link");
itemLinks.forEach((link) => {
   if (event.target.getAttribute('data-category-name') === link.textContent) {
      link.classList.add("selected-category");
  }
})
}
getCategoryList()
  .then(resp => {
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
        if (event.target.textContent === "All Categories") {
          homeMarkup()
        } else { 
          categoryMarkupByName(event.target.textContent)
        }
      });
    });
  })
  .catch(err => console.log(err))
  function categoryMarkupByName (nameCategory) {
    getCategory(nameCategory)
            .then(resp => {
              const booksOfCategory = resp.data
              console.log(booksOfCategory);
              const arrayOfWordsOfCategory = nameCategory.split(" ")

              const lastWordFromCategory = arrayOfWordsOfCategory.length - 1
              const categoryNameWithoutLastWord = arrayOfWordsOfCategory.slice(0, lastWordFromCategory).join(" ")



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
  }
export { onBtnClickCategory }





