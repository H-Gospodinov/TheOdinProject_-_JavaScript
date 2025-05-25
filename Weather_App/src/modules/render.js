import getWeather from "./weather.js";
import createCurrent from "./current.js";
import createHour from "./hours.js";
import createDay from "./days.js";
 
//const weather = await getWeather();

const concatHours = [];
const concatDays = [];

    import sampleData from "./temp.json"; // TEMP
    const current = sampleData.currentConditions; // TEMP
    const hours = sampleData.days[0].hours; // TEMP
    const days = sampleData.days; // TEMP

async function currentWeather(target) {

    //const current = await weather.currentConditions;

    const text = sampleData.description;
    //const text = weather.description;
    target.innerHTML = await createCurrent(current, text);
}

async function forecastHours(target) {

    //const hours = await weather.days[0].hours;

    for (let i of [0, 3, 6, 9, 12, 15, 18, 21]) {
        concatHours.push(await createHour(hours[i]));
    }
    target.innerHTML = concatHours.join('');
}

async function forecastDays(target) {

    //const days = await weather.days;

    for (let i = 0; i < 7; i++) {
        concatDays.push(await createDay(days[i]));
    }
    target.innerHTML = concatDays.join('');
}

export {currentWeather, forecastHours, forecastDays};