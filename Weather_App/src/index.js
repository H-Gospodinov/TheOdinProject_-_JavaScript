//import "./styles/styles.css"; // do NOT include
import "./styles/media.css"; // always include

import {tempScale} from "./modules/weather.js";
import createContent from "./modules/render.js";

const displayCurrent = document.querySelector('.main .now');
const displayHours = document.querySelector('.main .hours');
const displayDays = document.querySelector('.main .week');

const locationBtn = document.querySelector('#location');
const tempUnitBtn = document.querySelector('#temp_unit');
tempUnitBtn.setAttribute('data-id', tempScale.units);

// INITIAL LOAD

const render = await createContent();

render.currentWeather(displayCurrent);
render.forecastHours(displayHours);
render.forecastDays(displayDays);

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

    render.currentWeather(displayCurrent);
    render.forecastHours(displayHours);
    render.forecastDays(displayDays);
});