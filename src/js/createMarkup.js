export {createMarkupFunds }

const createMarkupFunds = (array) => {
  return array.map(({ title, url, img }, idx) =>
    `<li>
        <a class ="funds-href" href="${url}" target="_blank">
            <div class="funds-number">${(idx + 1).toString().padStart(2, 0)}</>
            <img class="funds-img" src="${img}" alt="${title}"/>
        </a>
      </li>
      `).join('')
};