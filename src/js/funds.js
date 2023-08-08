// import { createMarkupFunds } from './createMarkup'  // funds rendering
import fund01 from '../img/fund01.png';
import fund02 from '../img/fund02.png';
import fund03 from '../img/fund03.png';
import fund04 from '../img/fund04.png';
import fund05 from '../img/fund05.png';
import fund06 from '../img/fund06.png';
import fund07 from '../img/fund07.png';
import fund08 from '../img/fund08.png';
import fund09 from '../img/fund09.png';

const fundsData = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: fund01,
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: fund02,
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: fund03,
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: fund04,
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: fund05,
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: fund06,
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: fund07,
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: fund08,
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: fund09,
    },
];

const fundsList = document.querySelector('.funds-list');
const fundsButtons = document.querySelector('.funds-buttons');

fundsButtons.addEventListener('click', onClickFunds);
// fundsButtons.lastElementChild.addEventListener('click', goBottom);
// fundsButtons.firstElementChild.addEventListener('click', goTop);

function onClickFunds() {
    if (fundsButtons.lastElementChild.classList.contains('is-hidden')) {
        fundsButtons.firstElementChild.classList.toggle('is-hidden');
        fundsButtons.lastElementChild.classList.toggle('is-hidden');
        goBottom();

    } else { 
        fundsButtons.lastElementChild.classList.toggle('is-hidden')
        fundsButtons.firstElementChild.classList.toggle('is-hidden');
        goTop();
    }
};

function goBottom() {
    fundsList.scrollTop = fundsList.scrollHeight;
}

function goTop (){
    fundsList.scrollTop = 0;
}

const createMarkupFunds = array => array.map(({ title, url, img }, idx) =>
  `<li class="funds-item">
    <a class ="funds-href" href="${url}" target="_blank">
      <span class="funds-number">${(idx + 1).toString().padStart(2, 0)}</span>
      <img class="funds-img" src="${img}" alt="${title}" height="32" />
    </a>
  </li>`).join('');

fundsList.insertAdjacentHTML('beforeend', createMarkupFunds(fundsData));

