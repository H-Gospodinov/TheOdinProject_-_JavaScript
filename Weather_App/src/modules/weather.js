import getLocation from "./location.js";

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
    //const cityname = location.city +','+ location.country_code2;
    const coordinates = location.latitude +','+ location.longitude;
    //const combined = coordinates + ',' +  cityname;

    return await findWeather(coordinates, 'metric');
}

export default getWeather;