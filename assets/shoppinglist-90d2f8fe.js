import{s as l,a as c,b as g,c as m,d as u,e as d,f as y,g as k,i as f,r as $}from"./main-efe805c9.js";const b=[{name:"Amazon",path:c,path2x:g},{name:"Apple Books",path:m,path2x:u},{name:"Bookshop",path:d,path2x:y}];function x(s){return`<li class="shopping-card">
<button class="button-trash js-trash" aria-label="Close window" type="button"  id="${s._id}">
<svg class="trash-icon">
<use href="${l}#trash"></use>
</svg>
</button>
<img src="${s.book_image}" alt="${s.title}" class="shopping-book-img" />
<div>
<p class="shopping-book-name">${s.title}</p>
<p class="shopping-book-category">${s.list_name}</p>
<p class="shopping-book-info">${s.description}</p>
<p class="book-author">${s.author}</p>
</div>
${S(s.buy_links)}
</li>`}function S(s){const a=[];b.forEach(t=>{const n=s.find(r=>r.name===t.name);n&&a.push({name:t.name,path:t.path,url:n.url})});let o='<ul class="shops-list">';return a.forEach(t=>{o+=`<li class="shop">
  <a
    href="${t.url}"
    class="shop-link"
    target="_blank"
    rel="noreferrer noopener"
    ><img srcset="${t.path2x} 2x" src="${t.path}" alt="${t.name}" class="shop-icon"
  /></a>
</li>`}),o+="</ul>",o}const e="/read-easy/assets/empty-67a0d972.png",h="/read-easy/assets/empty2x-20a66507.png",v={shoplist:document.querySelector(".shopping-list")};let p='<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';const i=k();!i&&i.length===0?p+=`<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    This page is empty, add some books and proceed to order.
  </p>
  <img
    srcset="${h} 2x"
    src="${e}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`:f().then(s=>{s||(p+=`<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    Please sign-up to manage your Shopping List
  </p>
  <img
    srcset="${h} 2x"
    src="${e}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`)});p+='<ul class="book-list">';p+=i.map(s=>x(s)).join("");p+="</ul>";v.shoplist.innerHTML=p;const L=document.querySelector(".js-trash");L.addEventListener("click",B);function B(s){const a=s.target.closest(".js-trash");if(s.target.closest(".js-trash")){const o=a.id;$(o)}}
