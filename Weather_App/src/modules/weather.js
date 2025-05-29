import getLocation from "./location.js";
export const tempScale = {units: 'metric'};
export const localName = {name: ''};

// FIND WEATHER

async function findWeather(location, units) {

    const options = `&unitGroup=${units}&iconSet=icons2`;
    const authorize = '9RU8UASBJ27STY53UE64S6VR8';
    try {
        const request = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${authorize}${options}`);

        if (!request.ok && request.status === 400) {
            console.error('Bad Request: location not found');
            return; // stop
        }
        const weatherData = await request.json();
        return weatherData;
    }
    catch (error) {
        console.error('Error fetching weather data,', error);
    }
}
// GET WEATHER

async function getWeather(New) {

    let location = New ? New : await getLocation();
    if (!location) return; // stop

    if (New) {
        localName.name = New;
        return await findWeather(New, tempScale.units);
    }
    else {
        if (location.country_code2 === 'US') {
            tempScale.units = 'us';
        }
        const coordinates = location.latitude +','+ location.longitude;
        localName.name = location.city +', '+ location.country_name;
        return await findWeather(coordinates, tempScale.units);
    }
}

export default getWeather;