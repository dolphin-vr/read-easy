import axios from 'axios';
const configAx = {
   method: 'get',
   baseURL: 'https://books-backend.p.goit.global/',
   // params: {
   //   key: '38368366-a7227dffd937457d386778604',
   //   image_type: 'photo',
   //   orientation: 'horizontal',
   //   safesearch: true,
   //   per_page: 40,
   // },
 };

async function serviceGetTopBooks() {
  try {
    const { data } = await axios('/books/top-books', configAx);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export { serviceGetTopBooks };