import axios from 'axios';

const baseUrl = 'https://books-backend.p.goit.global/';
const categoryListUrl = 'books/category-list';
const topBooksUrl = 'books/top-books';
const categoryUrl = 'books/category';
const idUrl = 'books/';

const getCategoryList = async () => {
  return await axios.get(baseUrl + categoryListUrl);
};

const getTopBooks = async () => {
  return await axios.get(baseUrl + topBooksUrl);
};

const getCategory = async categoryName => {
  const paramsObj = {
    category: categoryName,
  };
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`${baseUrl}${categoryUrl}/?${params}`);
};

const getBookById = async id => {
  return await axios.get(`${baseUrl}${idUrl}/${id}`);
};

export { getCategoryList, getTopBooks, getCategory, getBookById };
