import fund01 from '../img/fund01.png';
import fund02 from '../img/fund02.png';
import fund03 from '../img/fund03.png';
import fund04 from '../img/fund04.png';
import fund05 from '../img/fund05.png';
import fund06 from '../img/fund06.png';
import fund07 from '../img/fund07.png';
import fund08 from '../img/fund08.png';
import fund09 from '../img/fund09.png';
import fund01_2x from '../img/fund01_2x.png';
import fund02_2x from '../img/fund02_2x.png';
import fund03_2x from '../img/fund03_2x.png';
import fund04_2x from '../img/fund04_2x.png';
import fund05_2x from '../img/fund05_2x.png';
import fund06_2x from '../img/fund06_2x.png';
import fund07_2x from '../img/fund07_2x.png';
import fund08_2x from '../img/fund08_2x.png';
import fund09_2x from '../img/fund09_2x.png';

const fundsData = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: fund01,
        img2x: fund01_2x,
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: fund02,
        img2x: fund02_2x,
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: fund03,
        img2x: fund03_2x,
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: fund04,
        img2x: fund04_2x,
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: fund05,
        img2x: fund05_2x,
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: fund06,
        img2x: fund06_2x,
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: fund07,
        img2x: fund07_2x,
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: fund08,
        img2x: fund08_2x,
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: fund09,
        img2x: fund09_2x,
    },
];

const fundsList = document.querySelector('.funds-list');
const fundsButtons = document.querySelector('.funds-buttons');

fundsButtons.addEventListener('click', onClickFunds);

function onClickFunds() {
    if (fundsButtons.lastElementChild.classList.contains('is-hidden')) {
        goBottom();
    } else { 
        goTop();
    }
    fundsButtons.firstElementChild.classList.toggle('is-hidden');
    fundsButtons.lastElementChild.classList.toggle('is-hidden');
};

function goBottom() {
    fundsList.scrollTop = fundsList.scrollHeight;
}

function goTop (){
    fundsList.scrollTop = 0;
}

const createMarkupFunds = array => array.map(({ title, url, img, img2x }, idx) =>
  `<li class="funds-item">
    <a class ="funds-href" href="${url}" target="_blank">
      <span class="funds-number">${(idx + 1).toString().padStart(2, 0)}</span>
      <img class="funds-img" srcset="${img}, ${img2x}" src="${img}" alt="${title}" />
    </a>
  </li>`).join('');

fundsList.insertAdjacentHTML('beforeend', createMarkupFunds(fundsData));

