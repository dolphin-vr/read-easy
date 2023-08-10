// import axios from 'axios';
// import { Notify } from '../../node_modules/notiflix/build/notiflix-notify-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { keyPage } from "./vars";
import { homeMarkup } from './home';
import { shoppinglistMarkup, trashBook } from './shop2';
const keyPage = 'activpage';

const optNotiflx = {
  position: 'center-bottom',
  width: '380px',
  timeout: 5000,
  fontSize: '28px',
};

const refs = {
  catlisSec: document.querySelector('.js-catlist'),
  fundsSec: document.querySelector('.js-funds'),
  mainSec: document.querySelector('.js-main'),
  btnHome: document.querySelector('.btnHome'),
  btnSL: document.querySelector('.btnSL'),
};

refs.btnHome.addEventListener('click', showHomePage);
refs.btnSL.addEventListener('click', showShoppingList);

function showActivePage() {
  console.dir('catlist= ', refs.catlisSec);
  let currentPage = JSON.parse(sessionStorage.getItem(keyPage));
  if (currentPage === 'shoppinglist') {
    console.log('if showShoppingList');
    showShoppingList();
  } else {
    console.log('if showHomePage');
    showHomePage();
  }
}

import { getStorageShopingList } from './api-shiping-localstorage';
import empty from '../img/empty.png';
import empty2x from '../img/empty2x.png';

const PAGINATION_COUNT_ITEMS = 3;

function showShoppingList() {
  console.log('func showShoppingList');
  refs.catlisSec.classList.replace('category', 'hidden');
  sessionStorage.setItem(keyPage, JSON.stringify('shoppinglist'));

  // SL title
  let shoplistMarkup = '<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';
  const shoppingList = getStorageShopingList();
  console.log(shoppingList);
  let countShopingList = shoppingList.length;
  // SL absent or empty
  if (!shoppingList || shoppingList.length === 0) {
    shoplistMarkup += ` <div class="shopping-list-empty">
                          <p class="shopping-book-empty">This page is empty, add some books and proceed to order.</p>
                          <img srcset="${empty2x} 2x" src="${empty}" alt="Empty Shopping List" class="shopping-book-empty-img"/>
                        </div>`;
    refs.mainSec.innerHTML = shoplistMarkup;
    return;
  }
  shoplistMarkup += '<ul class="book-list-items"></ul>'; //book-list
  let countPagesShopingList = Math.ceil(countShopingList / PAGINATION_COUNT_ITEMS);
  let counterPagesShopingList = 1;
  if (countPagesShopingList > 1) {
    shoplistMarkup += `
    <div class="shopping-list-pagination">
      <button class="shopping-list-btn shopping-list-start" type="button" >
        <<
      </button>
      <button class="shopping-list-btn shopping-list-back" type="button" >
        <
      </button>`;
    if (countPagesShopingList == 2) {
      shoplistMarkup += `
            <button class="shopping-list-btn shopping-list-middle shopping-list-middle1" type="button" >
              1
            </button>
            <button class="shopping-list-btn shopping-list-middle shopping-list-middle2" type="button" >
              2
            </button>`;
    } else {
      shoplistMarkup += `
        <button class="shopping-list-btn shopping-list-middle shopping-list-middle1" type="button" >
          1
        </button>
        <button class="shopping-list-btn shopping-list-middle shopping-list-middle2" type="button" >
          2
        </button>
        <button class="shopping-list-btn shopping-list-middle shopping-list-middle3" type="button" >
          3
        </button>`;
    }

    shoplistMarkup += `
    <button class="shopping-list-forward shopping-list-btn" type="button" >
        >
      </button>
      <button class="shopping-list-end shopping-list-btn" type="button" >
        >>
      </button>
    </div> `;
  }
  refs.mainSec.innerHTML = shoplistMarkup;
  const bookList = document.querySelector('.book-list-items');
  shoplistMarkup = shoppinglistMarkup(shoppingList.slice(0, PAGINATION_COUNT_ITEMS));
  bookList.innerHTML = shoplistMarkup;
  const trashBtns = document.querySelectorAll('.js-trash');
  if (trashBtns.length > 0) {
    console.log('trashBtn= ', trashBtns);
    refs.mainSec.addEventListener('click', trashBook);
  }
  let middleButtons = [];
  const shoppingListEnd = document.querySelector('.shopping-list-end');
  if (shoppingListEnd != null) {
    shoppingListEnd.addEventListener('click', () => {
      console.log('shoppingListEnd');
      let addButtonshoplistMarkup = shoppinglistMarkup(
        shoppingList.slice(
          (countPagesShopingList - 1) * PAGINATION_COUNT_ITEMS,
          Math.min(countPagesShopingList * PAGINATION_COUNT_ITEMS, countShopingList + 1)
        )
      );
      bookList.innerHTML = addButtonshoplistMarkup;
      counterPagesShopingList = countPagesShopingList;
      updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);
    });
  }

  const shoppingListStart = document.querySelector('.shopping-list-start');
  if (shoppingListStart != null) {
    shoppingListStart.addEventListener('click', () => {
      console.log('shoppingListForward');
      let addButtonshoplistMarkup = shoppinglistMarkup(shoppingList.slice(0, PAGINATION_COUNT_ITEMS));
      bookList.innerHTML = addButtonshoplistMarkup;
      counterPagesShopingList = 1;
      updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);
    });
  }

  const shoppingListMiddle1 = document.querySelector('.shopping-list-middle1');
  if (shoppingListMiddle1 != null) {
    middleButtons.push(shoppingListMiddle1);
    shoppingListMiddle1.addEventListener('click', () => {
      if (!isNaN(shoppingListMiddle1.textContent)) {
        const num = Number(shoppingListMiddle1.textContent);
        console.log('1 num ', num);
        counterPagesShopingList = num;
        let addButtonshoplistMarkup = shoppinglistMarkup(
          shoppingList.slice(
            (num - 1) * PAGINATION_COUNT_ITEMS,
            Math.min(num * PAGINATION_COUNT_ITEMS, countShopingList + 1)
          )
        );
        bookList.innerHTML = addButtonshoplistMarkup;
        updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);
      }
    });
  }

  const shoppingListMiddle2 = document.querySelector('.shopping-list-middle2');
  if (shoppingListMiddle2 != null) {
    middleButtons.push(shoppingListMiddle2);
    shoppingListMiddle2.addEventListener('click', () => {
      if (!isNaN(shoppingListMiddle2.textContent)) {
        const num = Number(shoppingListMiddle2.textContent);
        console.log('2 num ', num);
        counterPagesShopingList = num;
        let addButtonshoplistMarkup = shoppinglistMarkup(
          shoppingList.slice(
            (num - 1) * PAGINATION_COUNT_ITEMS,
            Math.min(num * PAGINATION_COUNT_ITEMS, countShopingList + 1)
          )
        );
        bookList.innerHTML = addButtonshoplistMarkup;
        updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);
      }
    });
  }

  const shoppingListMiddle3 = document.querySelector('.shopping-list-middle3');
  if (shoppingListMiddle3 != null) {
    middleButtons.push(shoppingListMiddle3);
    shoppingListMiddle3.addEventListener('click', () => {
      if (!isNaN(shoppingListMiddle3.textContent)) {
        const num = Number(shoppingListMiddle3.textContent);
        console.log('3 num ', num);
        counterPagesShopingList = num;
        let addButtonshoplistMarkup = shoppinglistMarkup(
          shoppingList.slice(
            (num - 1) * PAGINATION_COUNT_ITEMS,
            Math.min(num * PAGINATION_COUNT_ITEMS, countShopingList + 1)
          )
        );
        bookList.innerHTML = addButtonshoplistMarkup;
        updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);
      }
    });
  }

  const updateButtons = (middleButtons, currentPage, countPage) => {
    console.log('currentPage = ', currentPage, ' countPage = ', countPage);
    const buttons = middleButtons.length;
    if (buttons <= 0) {
      return;
    }
    for (let i = 0; i < buttons; i++) {
      middleButtons[i].classList.remove('shopping-list-active');
    }

    if (currentPage == 1) {
      for (let i = 0; i < buttons; i++) {
        middleButtons[i].textContent = i + 1;
      }
      middleButtons[0].classList.add('shopping-list-active');
    } else if (currentPage == countPage) {
      for (let i = 0; i < buttons; i++) {
        middleButtons[buttons - i - 1].textContent = countPage - i;
      }
      middleButtons[middleButtons.length - 1].classList.add('shopping-list-active');
    } else {
      for (let i = 0; i < buttons; i++) {
        middleButtons[i].textContent = currentPage - 1 + i;
      }
      middleButtons[1].classList.add('shopping-list-active');
    }
  };

  updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);

  console.log(middleButtons.length);

  const shoppingListForward = document.querySelector('.shopping-list-forward');
  if (shoppingListForward != null) {
    shoppingListForward.addEventListener('click', () => {
      if (counterPagesShopingList != countPagesShopingList) {
        counterPagesShopingList++;
      }
      let addButtonshoplistMarkup = shoppinglistMarkup(
        shoppingList.slice(
          (counterPagesShopingList - 1) * PAGINATION_COUNT_ITEMS,
          Math.min(counterPagesShopingList * PAGINATION_COUNT_ITEMS, countShopingList + 1)
        )
      );
      bookList.innerHTML = addButtonshoplistMarkup;
      updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);
    });
  }

  const shoppingListBack = document.querySelector('.shopping-list-back');
  if (shoppingListBack != null) {
    shoppingListBack.addEventListener('click', () => {
      if (counterPagesShopingList > 1) {
        counterPagesShopingList--;
      }
      let addButtonshoplistMarkup = shoppinglistMarkup(
        shoppingList.slice(
          (counterPagesShopingList - 1) * PAGINATION_COUNT_ITEMS,
          Math.min(counterPagesShopingList * PAGINATION_COUNT_ITEMS, countShopingList + 1)
        )
      );
      bookList.innerHTML = addButtonshoplistMarkup;
      updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);
    });
  }
}

function showHomePage() {
  console.log('func showHomePage');
  refs.catlisSec.classList.replace('hidden', 'category');
  sessionStorage.setItem(keyPage, JSON.stringify('homepage'));
  homeMarkup();
}

export { showActivePage, showShoppingList };
