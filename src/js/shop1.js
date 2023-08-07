const shoplist = [
   {_id,
   title,
   author,
   category,
   descript,
   cover,
   shops: [url1, url2, "і так далі"]
}
]
const listOfBooks = shoplist.map(el => createBookCard(el)).join('');

function   createBookCard(book){
   return `<li class="item">
      <button class="trash js-trash" aria-label="Close window" type="button"  id="${book._id}><svg class="icon"><use href="${sprite}#trash"></use></svg></button>
      <img src="${book.cover}" alt="">
     <div class="card2">
     <h2 class="book-title">${book.title}</h2>
     <h3 class="book-categ">${book.category}</h3>
     <p class="book-descr">${book.descript}</p>
     <p class="book-author">${book.author}</p>
     </div>${bookShopsMurkup(book.shops)}
   </li>`
}

function bookShopsMurkup(shops){
   
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