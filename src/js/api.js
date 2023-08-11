// import axios from 'axios';
// import { Notify } from '../../node_modules/notiflix/build/notiflix-notify-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { keyPage } from "./vars";

import { getStorageShopingList } from './api-shiping-localstorage';
import empty from '../img/empty.png';
import empty2x from '../img/empty2x.png';
import { showHomePage } from './interface';
import { homeMarkup } from './home';
import { hendlerClick } from './modal';
import { shoppedBooksMarkup, trashBook } from './shopslist';
import { toggleMenu } from './menu';
const keyPage = 'activpage';

const optNotiflx = {
  position: 'center-bottom',
  width: '380px',
  timeout: 5000,
  fontSize: '28px',
};

const refs = {
  mobMenu: document.querySelector('[data-menu]'),
  catlisSec: document.querySelector('.js-catlist'),
  fundsSec: document.querySelector('.js-funds'),
  mainSec: document.querySelector('.js-main'),
  btnHome: document.querySelector('.btnHome'),
  btnSL: document.querySelector('.btnSL'),
  modalEl: document.querySelector('.js-modal-book-backdrop'),
};

refs.btnHome.addEventListener('click', showHomePage);
refs.btnSL.addEventListener('click', showShoppingList);

const PAGINATION_COUNT_ITEMS = 3;

function showShoppingList() {
  // console.log('func showShoppingList');
  refs.btnSL.classList.add('active-button');
  refs.btnHome.classList.remove('active-button');
  refs.fundsSec.classList.add('funds-wrap');
  refs.catlisSec.classList.replace('category', 'hidden');
  if (refs.mobMenu.classList.contains('is-open')){
    toggleMenu();
  };
  // 
  sessionStorage.setItem(keyPage, JSON.stringify('shoppinglist'));

  // SL title
  let shoplistMarkup =
    '<h2 class="shopping-title">Shopping <span class="shopping-title-list">List</span></h2>';

  const shoppingList = getStorageShopingList();
  // console.log(shoppingList);
  // SL absent or empty
  if (!shoppingList || shoppingList.length === 0) {
    shoplistMarkup += ` <div class="shopping-list-empty">
                          <p class="shopping-book-empty">This page is empty, add some books and proceed to order.</p>
                          <img srcset="${empty2x} 2x" src="${empty}" alt="Empty Shopping List" class="shopping-book-empty-img" loading="lazy"/>
                        </div>`;
    refs.mainSec.innerHTML = shoplistMarkup;
    return;
  }
  shoplistMarkup += '<ul class="book-list-items"></ul>'; //book-list
  let countShopingList = shoppingList.length;

  let countPagesShopingList = Math.ceil(
    countShopingList / PAGINATION_COUNT_ITEMS
  );
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
  // console.log('bookList');
  // console.log(bookList);

  shoplistMarkup = shoppedBooksMarkup(
    shoppingList.slice(0, PAGINATION_COUNT_ITEMS)
  );
  bookList.innerHTML = shoplistMarkup;

  // shoppedBooksMarkupRes += addButtonshoplistMarkup;

  const trashBtns = document.querySelectorAll('.js-trash');
  if (trashBtns.length > 0) {
    // console.log('trashBtn= ', trashBtns);
    refs.mainSec.addEventListener('click', trashBook);
    // const trashBtn = document.querySelector('.js-trash');
    // trashBtn.addEventListener('click', trashBook);
  }

  let middleButtons = [];

  const shoppingListEnd = document.querySelector('.shopping-list-end');
  if (shoppingListEnd != null) {
    shoppingListEnd.addEventListener('click', () => {
      // console.log('shoppingListEnd');
      let addButtonshoplistMarkup = shoppedBooksMarkup(
        shoppingList.slice(
          (countPagesShopingList - 1) * PAGINATION_COUNT_ITEMS,
          Math.min(
            countPagesShopingList * PAGINATION_COUNT_ITEMS,
            countShopingList + 1
          )
        )
      );
      bookList.innerHTML = addButtonshoplistMarkup;
      counterPagesShopingList = countPagesShopingList;
      updateButtons(
        middleButtons,
        counterPagesShopingList,
        countPagesShopingList
      );
    });
  }

  const shoppingListStart = document.querySelector('.shopping-list-start');
  if (shoppingListStart != null) {
    shoppingListStart.addEventListener('click', () => {
      // console.log('shoppingListForward');
      let addButtonshoplistMarkup = shoppedBooksMarkup(
        shoppingList.slice(0, PAGINATION_COUNT_ITEMS)
      );
      bookList.innerHTML = addButtonshoplistMarkup;
      counterPagesShopingList = 1;
      updateButtons(
        middleButtons,
        counterPagesShopingList,
        countPagesShopingList
      );
    });
  }

  const shoppingListMiddle1 = document.querySelector('.shopping-list-middle1');
  if (shoppingListMiddle1 != null) {
    middleButtons.push(shoppingListMiddle1);
    shoppingListMiddle1.addEventListener('click', () => {
      if (!isNaN(shoppingListMiddle1.textContent)) {
        const num = Number(shoppingListMiddle1.textContent);
        // console.log('1 num ', num);
        counterPagesShopingList = num;
        let addButtonshoplistMarkup = shoppedBooksMarkup(
          shoppingList.slice(
            (num - 1) * PAGINATION_COUNT_ITEMS,
            Math.min(num * PAGINATION_COUNT_ITEMS, countShopingList + 1)
          )
        );
        bookList.innerHTML = addButtonshoplistMarkup;
        updateButtons(
          middleButtons,
          counterPagesShopingList,
          countPagesShopingList
        );
      }
    });
  }

  const shoppingListMiddle2 = document.querySelector('.shopping-list-middle2');
  if (shoppingListMiddle2 != null) {
    middleButtons.push(shoppingListMiddle2);
    shoppingListMiddle2.addEventListener('click', () => {
      if (!isNaN(shoppingListMiddle2.textContent)) {
        const num = Number(shoppingListMiddle2.textContent);
        // console.log('2 num ', num);
        counterPagesShopingList = num;
        let addButtonshoplistMarkup = shoppedBooksMarkup(
          shoppingList.slice(
            (num - 1) * PAGINATION_COUNT_ITEMS,
            Math.min(num * PAGINATION_COUNT_ITEMS, countShopingList + 1)
          )
        );
        bookList.innerHTML = addButtonshoplistMarkup;
        updateButtons(
          middleButtons,
          counterPagesShopingList,
          countPagesShopingList
        );
      }
    });
  }

  const shoppingListMiddle3 = document.querySelector('.shopping-list-middle3');
  if (shoppingListMiddle3 != null) {
    middleButtons.push(shoppingListMiddle3);
    shoppingListMiddle3.addEventListener('click', () => {
      if (!isNaN(shoppingListMiddle3.textContent)) {
        const num = Number(shoppingListMiddle3.textContent);
        // console.log('3 num ', num);
        counterPagesShopingList = num;
        let addButtonshoplistMarkup = shoppedBooksMarkup(
          shoppingList.slice(
            (num - 1) * PAGINATION_COUNT_ITEMS,
            Math.min(num * PAGINATION_COUNT_ITEMS, countShopingList + 1)
          )
        );
        bookList.innerHTML = addButtonshoplistMarkup;
        updateButtons(
          middleButtons,
          counterPagesShopingList,
          countPagesShopingList
        );
      }
    });
  }

  const updateButtons = (middleButtons, currentPage, countPage) => {
    // console.log('currentPage = ', currentPage, ' countPage = ', countPage);
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
      middleButtons[middleButtons.length - 1].classList.add(
        'shopping-list-active'
      );
    } else {
      for (let i = 0; i < buttons; i++) {
        middleButtons[i].textContent = currentPage - 1 + i;
      }
      middleButtons[1].classList.add('shopping-list-active');
    }
  };

  updateButtons(middleButtons, counterPagesShopingList, countPagesShopingList);

  // console.log(middleButtons.length);

  const shoppingListForward = document.querySelector('.shopping-list-forward');
  if (shoppingListForward != null) {
    shoppingListForward.addEventListener('click', () => {
      if (counterPagesShopingList != countPagesShopingList) {
        counterPagesShopingList++;
      }
      let addButtonshoplistMarkup = shoppedBooksMarkup(
        shoppingList.slice(
          (counterPagesShopingList - 1) * PAGINATION_COUNT_ITEMS,
          Math.min(
            counterPagesShopingList * PAGINATION_COUNT_ITEMS,
            countShopingList + 1
          )
        )
      );
      bookList.innerHTML = addButtonshoplistMarkup;
      updateButtons(
        middleButtons,
        counterPagesShopingList,
        countPagesShopingList
      );
    });
  }

  const shoppingListBack = document.querySelector('.shopping-list-back');
  if (shoppingListBack != null) {
    shoppingListBack.addEventListener('click', () => {
      if (counterPagesShopingList > 1) {
        counterPagesShopingList--;
      }
      let addButtonshoplistMarkup = shoppedBooksMarkup(
        shoppingList.slice(
          (counterPagesShopingList - 1) * PAGINATION_COUNT_ITEMS,
          Math.min(
            counterPagesShopingList * PAGINATION_COUNT_ITEMS,
            countShopingList + 1
          )
        )
      );
      bookList.innerHTML = addButtonshoplistMarkup;
      updateButtons(
        middleButtons,
        counterPagesShopingList,
        countPagesShopingList
      );
    });
  }
}

// function showHomePage() {
//   // console.log('func showHomePage');
//   refs.catlisSec.classList.replace('hidden', 'category');
//   sessionStorage.setItem(keyPage, JSON.stringify('homepage'));
//   homeMarkup();
//   refs.mainSec.addEventListener('click', hendlerClick);
// }

export { showShoppingList };
