import{g as a,i as l,c as r,r as c,e as i,a as p}from"./main-63673672.js";const g={shoplist:document.querySelector(".shopping-list")};let t='<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';const o=a();!o&&o.length===0?t+=`<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    This page is empty, add some books and proceed to order.
  </p>
  <img
    srcset="${i} 2x"
    src="${p}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`:l().then(s=>{s||(t+=`<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    Please sign-up to manage your Shopping List
  </p>
  <img
    srcset="${i} 2x"
    src="${p}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`)});t+='<ul class="book-list">';t+=o.map(s=>r(s)).join("");t+="</ul>";g.shoplist.innerHTML=t;const h=document.querySelector(".js-trash");h.addEventListener("click",m);function m(s){const e=s.target.closest(".js-trash");if(s.target.closest(".js-trash")){const n=e.id;c(n)}}
