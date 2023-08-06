export {createMarkupFunds }

const createMarkupFunds = array => array.map(({ title, url, img }, idx) => `<li>
        <a class ="funds-href" href="${url}" target="_blank">
            <div class="funds-number">${(idx + 1).toString().padStart(2, 0)}</>
            <img class="funds-img" src="${img}" alt="${title}" height="32"/>
        </a>
      </li>`).join('');