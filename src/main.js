import './js/modal';
import './js/authorization-modal';
import './js/header-burger';
// import './js/authorization';
// import './js/shoppinglist';

import { homeMarkup } from './js/home';
import { showActivePage } from './js/api';
import {getCategoryList, getTopBooks, getCategory, getBookById} from "./js/api-books"
const categoryList = document.querySelector(".js-category-list")
const booksList = document.querySelector(".book-list")
const modalBook = document.querySelector(".modal-book")
showActivePage();
homeMarkup();
