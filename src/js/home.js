import { getTopBooks } from './api-books';
import { onBtnClickCategory } from './category';
// Очищаємо контейнер перед відмальовкою
const topbookContainer = document.getElementById('top-book-container');
topbookContainer.innerHTML = '';

const createMarkup = book => {
    // Створення <li> елемента
    const bookLi = document.createElement('li');
    bookLi.classList.add('book-thumb', 'js-book-thumb');

    // Створення <a> елемента
    const bookLink = document.createElement('a');
    bookLink.classList.add('book-link');
    bookLink.id = book._id;
    bookLink.href = '#';

    // Створення <img> елемента
    const bookImage = document.createElement('img');
    bookImage.classList.add('img-book', 'js-img-book');
    bookImage.src = book.book_image;
    bookImage.alt = book.title;
    bookLink.appendChild(bookImage);

    // Створення першого <p> елемента
    const bookName = document.createElement('p');
    bookName.classList.add('book-name', 'js-book-name');
    bookName.textContent = book.title;
    bookLink.appendChild(bookName);

    // Створення другого <p> елемента
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('author', 'js-author');
    bookAuthor.textContent = book.author;
    bookLink.appendChild(bookAuthor);

    // Вкладення <a> елемента всередину <li> елемента
    bookLi.appendChild(bookLink);

    return bookLi;
};
// Функція для відмальовки заголовка
const createHeader = title => {
    const h1 = document.createElement('h1');
    h1.classList.add('book-list-title');

    const span = document.createElement('span');
    span.classList.add('spn-books');
    span.textContent = 'Books';

    h1.textContent = title;
    h1.appendChild(span);

    return h1;
};

async function homeMarkup() {
    try {
        const topBooksResponse = await getTopBooks();
        const categories = topBooksResponse.data;
        // Відмальовка заголовка
        const header = createHeader("Best Sellers");
        topbookContainer.appendChild(header);
        categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('container-top-book');

            const categoryName = document.createElement('p');
            categoryName.classList.add('book-category', 'js-book-cat');
            categoryName.textContent = category.list_name;
            categoryDiv.appendChild(categoryName);

            const bookList = document.createElement('ul');
            bookList.classList.add('best-category', 'js-top-cat');
            categoryDiv.appendChild(bookList);

            for (let i = 0; i < 5; i++) {
                if (category.books[i]) {
                    const bookMarkup = createMarkup(category.books[i]);
                    bookList.appendChild(bookMarkup);
                }
            }

            const seeMoreButton = document.createElement('button');
            seeMoreButton.classList.add('btn-see-more');
            seeMoreButton.textContent = 'SEE MORE';
            seeMoreButton.type = 'button';
            seeMoreButton.dataset.categoryName = category.list_name;
            categoryDiv.appendChild(seeMoreButton);

            topbookContainer.appendChild(categoryDiv);
        });
        const btns = document.querySelectorAll(".btn-see-more")
        btns.forEach(btn => {
            btn.addEventListener("click", onBtnClickCategory)
        })
    } catch (error) {
        console.error('Помилка:', error);
    }
}

export { homeMarkup };
