import shop1png from '../img/shop1.png';
import shop2png from '../img/shop2.png';
import shop3png from '../img/shop3.png';
import shop1x2png from '../img/shop1x2.png';
import shop2x2png from '../img/shop2x2.png';
import shop3x2png from '../img/shop3x2.png';
import sprite from '../img/sprite.svg';

const iconPaths = [
  {
    name: 'Amazon',
    path: shop1png,
    path2x: shop1x2png,
  },
  {
    name: 'Apple Books',
    path: shop2png,
    path2x: shop2x2png,
  },
  {
    name: 'Bookshop',
    path: shop3png,
    path2x: shop3x2png,
  },
];

function createBookCard(book) {
  return `<li class="shopping-card">
<button class="button-trash js-trash" aria-label="Close window" type="button"  id="${
    book._id
  }">
<svg class="trash-icon">
<use href="${sprite}#trash"></use>
</svg>
</button>
<img src="${book.book_image}" alt="${book.title}" class="shopping-book-img" />
<div>
<p class="shopping-book-name">${book.title}</p>
<p class="shopping-book-category">${book.list_name}</p>
<p class="shopping-book-info">${book.description}</p>
<p class="book-author">${book.author}</p>
</div>
${bookShopsMurkup(book.buy_links)}
</li>`;
}

function bookShopsMurkup(shops) {
  const shopIcons = [];
  iconPaths.forEach(p => {
    const u = shops.find(b => b.name === p.name);
    if (u) {
      shopIcons.push({
        name: p.name,
        path: p.path,
        path2x: p.path2x,
        url: u.url,
      });
    }
  });
  let markup = '<ul class="shops-list">';
  shopIcons.forEach(el => {
    markup += `<li class="shop">
  <a
    href="${el.url}"
    class="shop-link"
    target="_blank"
    rel="noreferrer noopener"
    ><img srcset="${el.path2x} 2x" src="${el.path}" alt="${el.name}" class="shop-icon ${el.name}"
  /></a>
</li>`;
  });
  markup += '</ul>';

  return markup;
}

export { createBookCard, bookShopsMurkup };
