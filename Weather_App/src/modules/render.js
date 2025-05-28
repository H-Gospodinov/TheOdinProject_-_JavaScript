import getWeather from "./weather.js";
import searchLocation from "./search.js";
import createCurrent from "./current.js";
import createHour from "./hours.js";
import createDay from "./days.js";

import sampleData from "./temp.json"; // TEMP
const current = sampleData.currentConditions; // TEMP
const text = sampleData.description;
const hours = sampleData.days[0].hours; // TEMP
const days = sampleData.days; // TEMP

async function createContent() {

    //let weather = await getWeather();

    return { // render

        updateWeater: async () => {
            weather = await getWeather();
        },

        // CURRENT WEATHER

        currentWeather: async (target) => {

            //const current = await weather.currentConditions;
            //const text = await weather.description;

            target.innerHTML = await createCurrent(current, text);
        },

        // TODAYS WEATHER

        forecastHours: async (target) => {

            //const hours = await weather.days[0].hours;
            const concatHours = [];

            for (let i of [0, 3, 6, 9, 12, 15, 18, 21]) {
                concatHours.push(await createHour(hours[i]));
            }
            target.innerHTML = concatHours.join('');
        },

        // WEATHER FORECAST

        forecastDays: async (target) => {

            //const days = await weather.days;
            const concatDays = [];

            for (let i = 0; i < 7; i++) {
                concatDays.push(await createDay(days[i]));
            }
            target.innerHTML = concatDays.join('');
        },

        // SEARCH LOCATION

        locationList: async (input, target) => {

            const locationList = await searchLocation(input);

            target.replaceChildren();

            if (locationList && locationList.length) {

                for (const entry of locationList) {
                    const result = document.createElement('option');
                    result.value = entry.properties.formatted;
                    target.append(result);
                }
                target.classList.remove('no-results');
            }
            else {
                target.innerText = 'no results found';
                target.classList.add('no-results');
            }
        }, // populate datalist
    }
}
export default createContent;