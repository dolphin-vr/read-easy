import shop1png from '../img/shop1.png';
import shop2png from '../img/shop2.png';
import shop3png from '../img/shop3.png';
import sprite from "../img/sprite.svg";

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


 function   createBookCard(book){
  return `<li class="shopping-card">
<button class="button-trash js-trash" aria-label="Close window" type="button"  id="${book._id}">
<svg class="trash-icon">
<use href="${sprite}#trash"></use>
</svg>
</button>
<img src="${book.book_image}" alt="${book.title}" class="shopping-book-img" /><div class="card-item"<p class="shopping-book-name">${book.title}</p><p class="shopping-book-category">${book.list_name}</p><div class="shopping-book-info"><p> ${book.description}</p></div><p class="book-author">${book.author}</p></div>${bookShopsMurkup(book.buy_links)}</li>`
}

function bookShopsMurkup(shops){
 const shopIcons = [];
 iconPaths.forEach(p => {
   const u = shops.find(b => b.name === p.name);
   if (u) {
     shopIcons.push({name: p.name, path: p.path, url: u.url})
   }
 })
let markup = '<ul class="shops-list">';
shopIcons.forEach(el => {
   markup += `<li class="shop"><a href="${el.url}" class="shop-link" target="_blank" rel="noreferrer noopener"><img src="${el.path}" alt="${el.name}" class="shop-icon"></a></li>`
} )
markup += '</ul>'

 return markup
}

export {createBookCard, bookShopsMurkup}