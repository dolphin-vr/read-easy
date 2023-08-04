
export const createMarkupFunds = (array) => {
    return array.map(({ title, url, img }) =>
        `<li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>
      <li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>
      <li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>
      <li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>
      <li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>
      <li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>
      <li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>
      <li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>
      <li>
        <a href="${url}">
            <img src="${img}" alt="${title}" />
        </a>
      </li>`).join('');
}