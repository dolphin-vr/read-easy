import{s as o,a as p}from"./sprite-71a96cf9.js";o("test@g.com","12345678").then(s=>{console.log("signInApp success"),console.log(s)}).catch(s=>{console.log("signInApp wrong")});const n=[{_id,title,author,list_name,description,book_image,buy_links:[url1,url2,url3]}];n.map(s=>t(s)).join("");function t(s){return`<li class="shopping-card">
      <button class="button-trash js-trash" aria-label="Close window" type="button"  id="${s._id}><svg class="icon"><use href="${p}#trash"></use></svg></button>
      <img src="${s.book_image}" alt="${s.titel}" class="shopping-book-img" />
         <div class="card-item"
         <p class="shopping-book-name">${s.titel}</p>
         <p class="shopping-book-category">${s.list_name}</p>
         <div class="shopping-book-info">
         <p> ${s.description}</p>
         </div>
         <p class="book-author">${s.author}</p>
         </div>${e(s.shops)}
         </li>`}function e(s){return shop1png,shop2png,shop3png,"shops list"}document.querySelector("#page-empty");const i=document.querySelector(".js-shopping-remove-btn");console.log(i);
