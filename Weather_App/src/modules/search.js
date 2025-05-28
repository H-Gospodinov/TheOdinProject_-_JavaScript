
// FIND LOCATION

async function findLocation(input) {

    const options = `text=${encodeURIComponent(input)}&type=city&limit=5`;
    const authorize = '4da60ad59b6b4b2b8510107378b5641f';
    try {
        const request = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?${options}&apiKey=${authorize}`);
        const locationData = await request.json();

        storedLocation[input] = locationData.features; // cache it
        console.log(storedLocation)
        return locationData.features;
    }
    catch (error) {
        console.error('Error fetching location suggestions,', error);
    }
}
// SEARCH LOCATION

const storedLocation = {};

async function searchLocation(input) {

    let locationList = {}; // cached or new

    if (storedLocation[input]) {
        locationList = storedLocation[input];
    }
    else {
        locationList = await findLocation(input);
    }
    return locationList;
}

export default searchLocation;