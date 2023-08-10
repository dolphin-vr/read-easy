import{c as q,s as w,n as i,a as N,i as A,g as B,b as z,d as T}from"./log-out-72c50007.js";import"./funds-78dbb1f8.js";const I=()=>{localStorage.getItem("theme")==="dark"?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")},M=()=>{localStorage.getItem("theme")==="dark"?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","dark"))},W=()=>localStorage.getItem("theme")==="dark",m={logo:document.querySelector(".logo"),home:document.querySelector(".home"),shoplist:document.querySelector(".shoplist"),slider:document.querySelector(".slider-bgr"),signup:document.querySelector(".signup"),openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};I();x();m.slider.addEventListener("click",j);m.openModalBtn.addEventListener("click",k);m.closeModalBtn.addEventListener("click",k);function k(){m.modal.classList.toggle("is-open")}function j(){m.slider.classList.toggle("slider-dark"),M()}function x(){W()?m.slider.classList.add("slider-dark"):m.slider.classList.remove("slider-dark")}const s={form:document.querySelector(".authorization-form"),name:document.querySelector("#authorization-text"),mail:document.querySelector("#authorization-mail"),password:document.querySelector("#authorization-password"),buttonSignUp:document.querySelector(".authorization-sign-up-btn"),buttonSignIn:document.querySelector(".authorization-sign-in-btn"),modal:document.querySelector(".js-authorization-modal"),link:document.querySelectorAll(".authorization-link")};s.buttonSignUp.addEventListener("click",t=>{t.preventDefault(),q(s.mail.value,s.password.value).then(e=>{console.log("createAccount success"),console.log(e),w(s.name.value).then(o=>{console.log("setUserName success "),console.log(o),i.Notify.success("Account created"),s.modal.classList.toggle("is-hidden")}).catch(o=>{console.log(`setUserName wrong "${o.code}"`),removeAccount().then(a=>{console.log("removeAccount success"),console.log(a)}).catch(a=>{console.log("removeAccount wrong"),console.log(a.code)})})}).catch(e=>{i.Notify.failure(`createAccount wrong "${e.code}"`),e.code==="auth/email-already-in-use"?i.Notify.failure("Change auth/email"):e.code==="auth/invalid-email"?i.Notify.failure("Wrong auth/email"):e.code==="auth/missing-email"?i.Notify.failure("Enter email"):e.code==="auth/missing-password"?i.Notify.failure("Enter password"):i.Notify.failure("Wrong")})});s.buttonSignIn.addEventListener("click",t=>{t.preventDefault(),N(s.mail.value,s.password.value).then(e=>{console.log("signInApp success "),console.log(e),s.modal.classList.toggle("is-hidden"),A()}).catch(e=>{i.Notify.failure(`createAccount wrong "${e.code}"`),e.code==="auth/user-not-found"?i.Notify.failure("Not user"):e.code==="auth/invalid-email"?i.Notify.failure("Wrong auth/email"):e.code==="auth/missing-email"?i.Notify.failure("Enter email"):e.code==="auth/missing-password"?i.Notify.failure("Enter password"):e.code==="auth/wrong-password"?i.Notify.failure("Wrong password"):i.Notify.failure("Wrong")})});s.link[0].addEventListener("click",b);s.link[1].addEventListener("click",b);s.link[1].classList.add("authorization-link-active");s.name.classList.add("is-hidden");function b(t){this===s.link[0]?(s.link[1].classList.remove("authorization-link-active"),s.link[0].classList.add("authorization-link-active"),s.name.classList.remove("is-hidden"),s.buttonSignUp.classList.remove("is-hidden"),s.buttonSignIn.classList.add("is-hidden")):this===s.link[1]&&(s.link[0].classList.remove("authorization-link-active"),s.link[1].classList.add("authorization-link-active"),s.name.classList.add("is-hidden"),s.buttonSignUp.classList.add("is-hidden"),s.buttonSignIn.classList.remove("is-hidden"))}const O=document.querySelector(".js-category-list"),$=document.querySelector(".book-list");document.querySelector(".modal-book");function U(t){L(t.currentTarget.getAttribute("data-category-name")),document.querySelectorAll(".selected-category").forEach(o=>{o.classList.remove("selected-category")}),document.querySelectorAll(".category-link").forEach(o=>{t.target.getAttribute("data-category-name")===o.textContent&&o.classList.add("selected-category")})}B().then(t=>{const o=t.data.map(c=>`<li><a href="" class="category-link">${c.list_name}</a></li>`).join("");O.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".category-link").forEach(c=>{c.addEventListener("click",function(r){r.preventDefault(),document.querySelectorAll(".selected-category").forEach(n=>{n.classList.remove("selected-category")}),c.classList.add("selected-category"),r.target.textContent==="All Categories"?S():L(r.target.textContent)})})}).catch(t=>console.log(t));function L(t){z(t).then(e=>{const o=e.data,a=t.split(" "),c=a.length-1;let n=`<h1 class="book-list-title">${a.slice(0,c).join(" ")} <span class="spn-books">${a[c]}</span></h1><ul class="category-ul">`;o.forEach(l=>{n+=`<li class="book-thumb-category"><a href="" class="book-link" id="${l._id}"><img class="img-book-category" src="${l.book_image}" alt="book-test">
            <p class="book-name">${l.title}</p><p class="author">${l.author}</p></a></li>`}),n+="</ul>",$.innerHTML=n,document.querySelectorAll(".book-link").forEach(l=>{l.addEventListener("click",function(d){d.preventDefault()})})}).catch(e=>console.log(e))}const h=document.querySelector(".book-list"),p=document.createElement("span");p.classList.add("loader");h.appendChild(p);function H(t){const e=document.createElement("li");e.classList.add("book-thumb","js-book-thumb");const o=document.createElement("a");o.classList.add("book-link"),o.id=t._id,o.href="#";const a=document.createElement("img");a.classList.add("img-book","js-img-book","lazy-load"),a.dataset.src=t.book_image,a.alt=t.title,o.appendChild(a);const c=document.createElement("p");c.classList.add("book-name","js-book-name"),c.textContent=t.title,o.appendChild(c);const r=document.createElement("p");return r.classList.add("author","js-author"),r.textContent=t.author,o.appendChild(r),e.appendChild(o),e}function P(t){const e=document.createElement("h1");e.classList.add("book-list-title");const o=document.createElement("span");return o.classList.add("spn-books"),o.textContent=" Books",e.textContent=t,e.appendChild(o),e}async function S(){try{p.style.display="block";const e=(await T()).data;h.innerHTML="";const o=P("Best Sellers");h.appendChild(o),e.forEach(n=>{const u=document.createElement("div");u.classList.add("container-top-book");const l=document.createElement("p");l.classList.add("book-category","js-book-cat"),l.textContent=n.list_name,u.appendChild(l);const d=document.createElement("ul");d.classList.add("best-category","js-top-cat"),u.appendChild(d);let E=n.books.length>5?5:n.books.length;for(let f=0;f<E;f++){const C=H(n.books[f]);d.appendChild(C)}const g=document.createElement("button");g.classList.add("btn-see-more"),g.textContent="SEE MORE",g.type="button",g.dataset.categoryName=n.list_name,u.appendChild(g),h.appendChild(u)}),document.querySelectorAll(".btn-see-more").forEach(n=>{n.addEventListener("click",U)});const c=document.querySelectorAll(".lazy-load"),r=new IntersectionObserver((n,u)=>{n.forEach(l=>{if(l.isIntersecting){const d=l.target;d.src=d.dataset.src,d.classList.remove("lazy-load"),r.unobserve(d)}})});c.forEach(n=>{r.observe(n)})}catch(t){console.error("Помилка:",t)}finally{p.style.display="none"}}const y="activpage";function _(){JSON.parse(sessionStorage.getItem(y))==="shoppinglist"?D():J()}function D(){sessionStorage.setItem(y,JSON.stringify("shoppinglist"))}function J(){sessionStorage.setItem(y,JSON.stringify("homepage")),S()}function R(){const t=document.getElementById("goTopBtn");t.addEventListener("click",v),window.onscroll=()=>{const e=window.innerHeight*.4;document.body.scrollTop>e||document.documentElement.scrollTop>e?t.style.display="block":t.style.display="none"}}function v(){(document.body.scrollTop>0||document.documentElement.scrollTop>0)&&(window.scrollBy(0,-50),setTimeout(v,5))}document.querySelector(".js-category-list");document.querySelector(".book-list");document.querySelector(".modal-book");R();_();