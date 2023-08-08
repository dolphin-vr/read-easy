import shop1png from '../img/shop1.png';
import shop2png from '../img/shop2.png';
import shop3png from '../img/shop3.png';

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

export {bookShopsMurkup}