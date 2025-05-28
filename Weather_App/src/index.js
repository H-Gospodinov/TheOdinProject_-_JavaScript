//import "./styles/styles.css"; // do NOT include
import "./styles/media.css"; // always include

import {tempScale,localName} from "./modules/weather.js";
import {dynamicLogo} from "./modules/current.js";
import createContent from "./modules/render.js";

const pageTitle = document.querySelector('#page_title');
const logoImage = document.querySelector('.logo img');

const tempUnitBtn = document.querySelector('#temp_unit');
tempUnitBtn.setAttribute('data-id', tempScale.units);

const displayCurrent = document.querySelector('.main .now');
const displayHours = document.querySelector('.main .hours');
const displayDays = document.querySelector('.main .week');

const modalBox = document.querySelector('.modal');
const dataForm = document.querySelector('#locate');
const formInput = document.querySelector('#search');
const dropdown = document.querySelector('#result');


// INITIAL LOAD

const render = await createContent();

async function initialize() {

    document.body.classList.add('loading');
    pageTitle.innerText = localName.name;

    try {
        await render.currentWeather(displayCurrent);
        await render.forecastHours(displayHours);
        await render.forecastDays(displayDays);

        //logoImage.src = dynamicLogo.src;
        //logoImage.className = 'dynamic';
        logoImage.hidden = false;

        document.body.classList.remove('loading');
    }
    catch (error) {
        console.error('No content to render,', error);
        pageTitle.innerText = 'no data available';
    }
    finally {
        if (localName.name) return;
        pageTitle.innerText = 'location ?';
    }
} initialize();


// CHANGE UNITS

function changeUnits(button) {

    const setUnits = new CustomEvent('setUnits');
    document.dispatchEvent(setUnits);

    const first = button.firstElementChild;
    const last = button.lastElementChild;

    const toggle = (show, hide) => {
        show.hidden = false;
        hide.hidden = true;
    }
    if (button.dataset.id === 'metric') {

        tempScale.units = 'us';
        button.dataset.id = 'us';
        toggle (last, first);
    }
    else {
        tempScale.units = 'metric';
        button.dataset.id = 'metric';
        toggle (first, last);
    }
}
// AUTOCOMPLETE

function setLocation(input) {

    const inpuValue = input.value;
    let debounceTimeout;

    if (inpuValue.length < 3) return;

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {

        render.locationList(inpuValue, dropdown);
    }, 300); // debounce input
}

// EVENT HANDLERS

document.addEventListener('click', (e) => {

    const button = e.target.closest('button');
    if (!button) return; // not a button

    switch (button.id) {

        case 'temp_unit':
            changeUnits(button); break;

        case 'location':
            modalBox.showModal(); break;

        case 'close_btn':
            modalBox.close(); break;
    }
});  // buttons only

document.addEventListener('setUnits', async () => {

    await render.updateWeater();
    await initialize();
});

formInput.addEventListener('input', (e) => {

    setLocation(e.target);
});