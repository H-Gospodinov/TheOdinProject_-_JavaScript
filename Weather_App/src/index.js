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
const dataList = document.querySelector('#result');


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
        pageTitle.innerText = 'No location or data';
        changeTriggered = false; // reset
    }
} initialize();


// CHANGE LOCATION

function setLocation(e) {

    const inputValue = e.target.value;
    let debounceTimeout;

    if (inputValue.length < 3) {
        dataList.replaceChildren();
        return; // stop
    }
    switch (e.type) { // if change: ignore input

        case 'change':
            changeTriggered = true; break;
            
        case 'input':
            setTimeout(() => {
                changeTriggered ? null : debounceInput();
                changeTriggered = false;
            }, 0);
    }
    const debounceInput = () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            // autocomplete
            render.locationList(inputValue, dataList);
        }, 300);
    }
}
// CHANGE UNITS

async function changeUnits(button) {

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
    await render.updateWeater(null, true);
    await initialize();
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
});
// FORM HANDLERS

let changeTriggered = false;

formInput.addEventListener('change', setLocation);
formInput.addEventListener('input', setLocation);

dataForm.addEventListener('submit', async (e) => {

    e.preventDefault();
    
    await render.updateWeater(formInput.value);
    await initialize();
    modalBox.close();
});