//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import {currentWeather, forecastHours, forecastDays} from "./modules/render.js";

const displayCurrent = document.querySelector('.main .now');
const displayHours = document.querySelector('.main .hours');
const displayDays = document.querySelector('.main .week');

await currentWeather(displayCurrent);
await forecastHours(displayHours);
await forecastDays(displayDays);