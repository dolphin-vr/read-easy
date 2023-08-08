import { initTheme, isThemeDark, switchTheme } from "./theme-switcher";

const refs = {
  logo: document.querySelector('.logo'),
  home: document.querySelector('.home'),
  shoplist: document.querySelector('.shoplist'),
  slider: document.querySelector('.slider-bgr'),
  signup: document.querySelector('.signup'),
  openModalBtn: document.querySelector("[data-menu-open]"),
  closeModalBtn: document.querySelector("[data-menu-close]"),
  modal: document.querySelector("[data-menu]"),
  };
  initTheme()
  setStoredTheme()

  // console.dir(refs.slider);
// refs.home.addEventListener('click', showHomepage);
// refs.shoplist.addEventListener('click', showShoppingList);
// refs.signup.addEventListener('click', showSignUp);
refs.slider.addEventListener("click", themeSwitch);
refs.openModalBtn.addEventListener("click", showBurger);
refs.closeModalBtn.addEventListener("click", showBurger);


  function showBurger() {
    refs.modal.classList.toggle("is-open");
}

function themeSwitch(){
  refs.slider.classList.toggle('slider-dark');
  switchTheme()
}

function setStoredTheme(){
  console.log(isThemeDark());
  if (isThemeDark()){
    console.log('true', isThemeDark());
  refs.slider.classList.add('slider-dark');
  } else{
    console.log('false', isThemeDark());
  refs.slider.classList.remove('slider-dark');
  }
}

