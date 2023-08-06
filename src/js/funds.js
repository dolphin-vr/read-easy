import { createMarkupFunds } from './createMarkup'  // funds rendering

// array of funds
const fundsData = [
    {
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: './img/fund-01.png',
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: './img/fund-02.png',
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: './img/fund-03.png',
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: './img/fund-04.png',
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: './img/fund-05.png',
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: './img/fund-06.png',
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: './img/fund-07.png',
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: './img/fund-08.png',
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: './img/fund-09.png',
    },
];

//add <ul class="js-funds"></ul> to home.html (partial)     
const fundsList = document.querySelector('.bf');
fundsList.addEventListener('click', createMarkupFunds);

// add to DOM
fundsList.insertAdjacentHTML('beforeend', createMarkupFunds(fundsData));

// mobile, tablet - 4, desctop - 6 funds on page, scroll