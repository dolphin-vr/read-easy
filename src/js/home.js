import { getCategoryList, getTopBooks } from './api-books';

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
// -----------------------------ВІДМАЛЬОВКА КНИГ---------------------------
// Очищаємо контейнер перед відмальовкою
const topbookContainer = document.getElementById('top-book-container');
topbookContainer.innerHTML = '';
// Функція для створення розмітки книги
const createMarkup = (book) => {
    const bookLi = document.createElement('li');
    bookLi.classList.add('book-thumb', 'js-book-thumb');

    const bookImage = document.createElement('img');
    bookImage.classList.add('img-book', 'js-img-book');
    bookImage.src = book.book_image;
    bookImage.alt = book.title;

    const bookName = document.createElement('p');
    bookName.classList.add('book-name', 'js-book-name');
    bookName.textContent = book.title;

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('author', 'js-author');
    bookAuthor.textContent = book.author;

    bookLi.appendChild(bookImage);
    bookLi.appendChild(bookName);
    bookLi.appendChild(bookAuthor);

    return bookLi;
};

async function homeMarkup () {
    try {
        const categoryList = await getCategoryList();
        const categoryContainer = document.getElementById('top-book-container');

        categoryList.data.forEach(async (category) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('container-top-book');

            const categoryName = document.createElement('p');
            categoryName.classList.add('book-category', 'js-book-cat');
            categoryName.textContent = category.list_name;
            categoryDiv.appendChild(categoryName);

            const bookList = document.createElement('ul');
            bookList.classList.add('best-category', 'js-top-cat');
            categoryDiv.appendChild(bookList);

            const topBooksResponse = await getTopBooks();
            const categories = topBooksResponse.data;

            for (const cat of categories) {
                if (cat.list_name === category.list_name) {
                    const topBooks = cat.books;

                    for (let i = 0; i < 5; i++) {
                        if (topBooks[i]) {
                            const bookMarkup = createMarkup(topBooks[i]);
                            bookList.appendChild(bookMarkup);
                        }
                    }

                    break;
                }
            }

            const seeMoreButton = document.createElement('button');
            seeMoreButton.classList.add('btn-see-more');
            seeMoreButton.textContent = 'SEE MORE';
            categoryDiv.appendChild(seeMoreButton);

            categoryContainer.appendChild(categoryDiv);
        });
    } catch (error) {
        console.error('Помилка:', error);
    }
};

export {homeMarkup}