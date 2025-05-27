import getLocation from "./location.js";
export const tempScale = {units: 'metric'};
export const localName = {name: ''};

// FIND WEATHER

async function findWeather(location, units) {

    try {
        const requestData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=9RU8UASBJ27STY53UE64S6VR8&unitGroup=${units}&iconSet=icons2`, {mode: 'cors'});
        const weatherData = await requestData.json();
        return weatherData;
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
// GET WEATHER

async function getWeather() {

    const location = await getLocation();
    if (!location) return; // stop

    if (location.country_code2 === 'US') {
        tempScale.units = 'us';
    }
    const coordinates = location.latitude +','+ location.longitude;
    localName.name = location.city +','+ location.country_code2;

    return await findWeather(coordinates, tempScale.units);
}

export default getWeather;