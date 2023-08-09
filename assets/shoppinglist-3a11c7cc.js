import{e as c,f as g,h as m,j as u,k as d,l as y,m as k,o as f,p as $,r as b}from"./log-out-83fb8245.js";const x=[{name:"Amazon",path:g,path2x:m},{name:"Apple Books",path:u,path2x:d},{name:"Bookshop",path:y,path2x:k}];function v(s){return`<li class="shopping-card">
<button class="button-trash js-trash" aria-label="Close window" type="button"  id="${s._id}">
<svg class="trash-icon">
<use href="${c}#trash"></use>
</svg>
</button>
<img src="${s.book_image}" alt="${s.title}" class="shopping-book-img" /><div class="card-item"<p class="shopping-book-name">${s.title}</p><p class="shopping-book-category">${s.list_name}</p><div class="shopping-book-info"><p> ${s.description}</p></div><p class="book-author">${s.author}</p></div>${S(s.buy_links)}</li>`}function S(s){const a=[];x.forEach(o=>{const n=s.find(r=>r.name===o.name);n&&a.push({name:o.name,path:o.path,url:n.url})});let t='<ul class="shops-list">';return a.forEach(o=>{t+=`<li class="shop">
  <a
    href="${o.url}"
    class="shop-link"
    target="_blank"
    rel="noreferrer noopener"
    ><img srcset="${o.path2x} 2x" src="${o.path}" alt="${o.name}" class="shop-icon"
  /></a>
</li>`}),t+="</ul>",t}const e="/read-easy/assets/empty-67a0d972.png",l="/read-easy/assets/empty2x-20a66507.png",L={shoplist:document.querySelector(".shooping-list")};let p='<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';const i=f();!i&&i.length===0?p+=`<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    This page is empty, add some books and proceed to order.
  </p>
  <img
    srcset="${l} 2x"
    src="${e}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`:$().then(s=>{s||(p+=`<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    Please sign-up to manage your Shopping List
  </p>
  <img
    srcset="${l} 2x"
    src="${e}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`)});p+='<ul class="book-list">';p+=i.map(s=>v(s)).join("");p+="</ul>";L.shoplist.innerHTML=p;const h=document.querySelector(".js-trash");h.addEventListener("click",j);console.log(h);function j(s){const a=s.target.closest(".js-trash");if(console.log(a),s.target.closest(".js-trash")){const t=a.id;console.log(t),b(t)}}
