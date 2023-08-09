import{a as h,b as r,c,d as g,g as m,i as u}from"./log-out-a65fe758.js";const d=[{name:"Amazon",path:r},{name:"Apple Books",path:c},{name:"Bookshop",path:g}];function y(s){return`<li class="shopping-card">
     <button class="button-trash js-trash" aria-label="Close window" type="button"  id="${s._id}>
     <svg class="trash-icon"><use href="${h}#trash"></use></svg></button>
     <img src="${s.book_image}" alt="${s.title}" class="shopping-book-img" />
        <div class="card-item"
        <p class="shopping-book-name">${s.title}</p>
        <p class="shopping-book-category">${s.list_name}</p>
        <div class="shopping-book-info">
        <p> ${s.description}</p>
        </div>
        <p class="book-author">${s.author}</p>
        </div>${k(s.buy_links)}
        </li>`}function k(s){const i=[];d.forEach(p=>{const t=s.find(l=>l.name===p.name);t&&i.push({name:p.name,path:p.path,url:t.url})});let a='<ul class="shops-list">';return i.forEach(p=>{a+=`<li class="shop"><a href="${p.url}" class="shop-link" target="_blank" rel="noreferrer noopener"><img src="${p.path}" alt="${p.name}" class="shop-icon"></a></li>`}),a+="</ul>",a}const n="/read-easy/assets/empty-67a0d972.png",b={shoplist:document.querySelector(".shooping-list")};let o='<div class="shooping-list"><h1 class="shopping-titel">Shopping <span class="shopping-titel-list">List</span></h1>';const e=m();e?(o+='<ul class="book-list">',o+=e.map(s=>y(s)).join(""),o+="</ul>"):u()?o+=`<div class="shopping-list-empty"><a><p class="shopping-book-empty">Please sign-up to manage your Shopping List</p><img src="${n}" alt="Empty Shopping List" class="shopping-book-empty-img"></a></div>`:o+=`<div class="shopping-list-empty"><a><p class="shopping-book-empty">This page is empty, add some books and proceed to order.</p><img src="${n}" alt="Empty Shopping List" class="shopping-book-empty-img"></a></div>`;b.shoplist.innerHTML=o;
