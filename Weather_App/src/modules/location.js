
// FIND LOCATION

async function findLocation() {
    try {
        const geoLocation = await fetch(/*'https://api.ipgeolocation.io/ipgeo?apiKey=1892a0be4984422185242d37d697cf21'*/);
        const locationData = await geoLocation.json();

        localStorage.setItem('locationData', JSON.stringify(locationData)); // cache it
        return locationData;
    }
    catch (error) {
        console.error('Error fetching geolocation data:', error);
    }
}
// GET LOCATION

async function getLocation() {

    const storedLocation = localStorage.getItem('locationData');
    let location = {}; // cached or new

    if (storedLocation) {
        location = JSON.parse(storedLocation);
    }
    else {
        location = await findLocation();
    };
    return location;
}

export default getLocation;