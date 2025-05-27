//import "./styles/styles.css"; // do NOT include
import "./styles/media.css"; // always include

import {tempScale,localName} from "./modules/weather.js";
import {dynamicLogo} from "./modules/current.js";
import createContent from "./modules/render.js";

const pageTitle = document.querySelector('#page_title');
const logoImage = document.querySelector('.logo img');

const displayCurrent = document.querySelector('.main .now');
const displayHours = document.querySelector('.main .hours');
const displayDays = document.querySelector('.main .week');

const locationBtn = document.querySelector('#location');
const tempUnitBtn = document.querySelector('#temp_unit');
tempUnitBtn.setAttribute('data-id', tempScale.units);

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

// EVENT HANDLERS

tempUnitBtn.addEventListener('click', (e) => {

    const changeUnits = new CustomEvent('changeUnits');
    document.dispatchEvent(changeUnits);

    const button = e.currentTarget;
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
});
document.addEventListener('changeUnits', async () => {

    await render.updateWeater();
    await initialize();
});