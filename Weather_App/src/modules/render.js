import getWeather from "./weather.js";
import searchLocation from "./search.js";
import createCurrent from "./current.js";
import createHour from "./hours.js";
import createDay from "./days.js";

// CREATE CONTENT

async function createContent() {

    let weather = await getWeather();
    let currentLocation;

    return { // render

        updateWeater: async (New, current) => {

            if (current) {
                weather = await getWeather(currentLocation);
            } else {
                weather = await getWeather(New);
                currentLocation = New;
            }
        },
        // CURRENT WEATHER

        currentWeather: async (target) => {

            const current = await weather.currentConditions;
            const text = await weather.description;

            target.innerHTML = await createCurrent(current, text);
        },

        // TODAYS WEATHER

        forecastHours: async (target) => {

            const hours = await weather.days[0].hours;
            const concatHours = [];

            for (let i of [0, 3, 6, 9, 12, 15, 18, 21]) {
                concatHours.push(await createHour(hours[i]));
            }
            target.innerHTML = concatHours.join('');
        },

        // WEATHER FORECAST

        forecastDays: async (target) => {

            const days = await weather.days;
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
            } // skip undefined or empty
        },
    } // content factory
}
export default createContent;