// import { getCategoryList, getTopBooks, getCategory, getBookById } from './api-books';

// import { serviceGetTopBooks } from "./api";


const iconPaths = [
   {
     name: "Amazon",
     path: "/img/shop1.png"
   },
   {
     name: "Apple Books",
     path: "/img/shop2.png"
   },
   {
     name: "Bookshop",
     path: "/img/shop3.png"
   }
 ];

 const buyLinks = [
   {
     name: "Amazon",
     url: "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
   },
   {
     name: "Apple Books",
     url: "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
   },
   {
     name: "Barnes and Noble",
     url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
   },
   {
     name: "Books-A-Million",
     url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
   },
   {
     name: "Bookshop",
     url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
   },
   {
     name: "IndieBound",
     url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
   }
 ];

const shopIcons = [];

iconPaths.forEach(p => {
  const u = buyLinks.find(b => b.name === p.name);
  if (u) {
    shopIcons.push({name: p.name, path: p.path, url: u.url})
  }
})

console.log(shopIcons)


//  const topBooks = await serviceGetTopBooks();
// console.log('topBooks = ', topBooks);

//  const bestSellerList = await getTopBooks();

//  console.log('sest sell = ', bestSellerList);

// console.log('data.js')