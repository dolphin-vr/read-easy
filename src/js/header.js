const refs = {
  logo: document.querySelector('.logo'),
  home: document.querySelector('.home'),
  shoplist: document.querySelector('.shoplist'),
  signup: document.querySelector('.signup'),
  openModalBtn: document.querySelector("[data-menu-open]"),
  closeModalBtn: document.querySelector("[data-menu-close]"),
  modal: document.querySelector("[data-menu]"),
  };

// refs.home.addEventListener('click', showHomepage);
// refs.shoplist.addEventListener('click', showShoppingList);
// refs.signup.addEventListener('click', showSignUp);
refs.openModalBtn.addEventListener("click", showBurger);
refs.closeModalBtn.addEventListener("click", showBurger);


  function showBurger() {
    refs.modal.classList.toggle("is-open");
}




