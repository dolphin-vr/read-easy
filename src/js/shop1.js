import { bookShopsMurkup } from "./shopslist";

// const shoplist = [
//    {_id,
//    title,
//    author,
//    list_name,
//    description,
//    book_image,
//    buy_links: [{"name": "Amazon", "url": "https://www.amazon..."}]
// }
// ]

const listOfBooks = shoplist.map(el => createBookCard(el)).join('');

function   createBookCard(book){
   return `<li class="item">
      <button class="trash js-trash" aria-label="Close window" type="button"  id="${book._id}><svg class="icon"><use href="${sprite}#trash"></use></svg></button>
      <img src="${book.book_image}" alt="">
     <div class="card2">
     <h2 class="book-title">${book.title}</h2>
     <h3 class="book-categ">${book.list_name}</h3>
     <p class="book-descr">${book.description}</p>
     <p class="book-author">${book.author}</p>
     </div>${bookShopsMurkup(book.buy_links)}
   </li>`
}
