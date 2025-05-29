import {tempScale} from "./weather.js";
export const dynamicLogo = {src: ''};

class Current {

    constructor(
        {conditions, datetimeEpoch, feelslike, icon, sunrise, sunset, temp}, description
    ) {
        this.conditions = conditions;
        this.datetimeEpoch = datetimeEpoch;
        this.description = description;
        this.feelslike = feelslike;
        this.icon = icon;
        this.sunrise = sunrise.slice(0, 5);
        this.sunset = sunset.slice(0, 5);
        this.temp = temp;
    }
    format() {
        // API time is historical, use system time instead
        const date = new Date(/*(this.datetimeEpoch) * 1000*/);
        const options = { weekday: 'short', day: 'numeric', month: 'short',
                          hour: '2-digit', minute: '2-digit', hour12: false };
        return date.toLocaleString('en-US', options);
    }
    async render() {

        const image = await import(`../images/icons/${this.icon}.svg`);
        const units = tempScale.units === 'metric' ? '°C' : '°F';
        dynamicLogo.src = image.default; // export

        return `
            <div class="box current">
                <div class="date">${this.format()}</div>
                <div class="display">
                    <img src="${image.default}" width="104" height="104">
                    <span class="temp">${this.temp} ${units}</span>
                </div>
                <div class="details">
                    <div class="wrapper">
                        <span class="feels">
                            Feels like: <span>${this.feelslike} ${units}</span>
                        </span>
                        <span class="sep">/</span>
                        <span class="info short">${this.conditions}</span>
                    </div>
                    <div class="info long">${this.description}</div>
                    <div class="sun">
                        <span>Sunrise ${this.sunrise}</span>
                        <span class="sep">/</span>
                        <span>Sunset ${this.sunset}</span>
                    </div>
                </div>
            </div>
        `;
    }
}
function createCurrent(data, text) {

    const current = new Current(data, text);
    return current.render();
}

export default createCurrent;