import { getCategoryList, getTopBooks, getCategory, getBookById } from './api-books';

// -----------------------------ВІДМАЛЬОВКА КАТЕГОРІЙ---------------------------

(async () => {
    const categoryList = await getCategoryList();
    const categoryUl = document.getElementById('category-list');

    const sortedCategories = categoryList.data.sort((a, b) => {
        return a.list_name.localeCompare(b.list_name);
    });

    sortedCategories.forEach((category) => {
        const li = document.createElement('li');
        li.classList.add('name-category');
        li.textContent = category.list_name;
        categoryUl.appendChild(li);
    });
})();
// ---------------------------------ВІДМАЛЬОВКА КНИГ-------------------------

