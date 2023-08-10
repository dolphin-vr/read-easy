import{g as r,i as d,c as g,r as m,e as i,a as n}from"./main-4c313633.js";const o={openModalBtn:document.querySelector(".js-authorization-open"),closeModalBtn:document.querySelector(".js-authorization-close"),modal:document.querySelector(".js-authorization-modal"),backdrop:document.querySelector(".js-authorization-backdrop")};o.openModalBtn.addEventListener("click",a);o.closeModalBtn.addEventListener("click",a);function a(){o.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.addEventListener("keydown",c),o.modal.addEventListener("click",h)}function c(s){s.key==="Escape"&&(o.modal.classList.toggle("is-hidden"),document.removeEventListener("keydown",c))}function h(s){s.target===o.backdrop&&o.modal.classList.toggle("is-hidden")}const u={shoplist:document.querySelector(".shopping-list")};let t='<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';const e=r();!e&&e.length===0?t+=`<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    This page is empty, add some books and proceed to order.
  </p>
  <img
    srcset="${i} 2x"
    src="${n}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`:d().then(s=>{s||(t+=`<div class="shopping-list-empty">
  <p class="shopping-book-empty">
    Please sign-up to manage your Shopping List
  </p>
  <img
    srcset="${i} 2x"
    src="${n}"
    alt="Empty Shopping List"
    class="shopping-book-empty-img"
  />
</div>`)});t+='<ul class="book-list">';t+=e.map(s=>g(s)).join("");t+="</ul>";u.shoplist.innerHTML=t;const y=document.querySelector(".js-trash");y.addEventListener("click",k);function k(s){const l=s.target.closest(".js-trash");if(s.target.closest(".js-trash")){const p=l.id;m(p)}}
