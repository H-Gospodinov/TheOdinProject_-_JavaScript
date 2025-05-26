import {tempScale} from "./weather.js";

class Hour {

    constructor (
        {datetime, feelslike, icon, temp, winddir, windspeed}
    ) {
        this.datetime = datetime.slice(0, 5);
        this.feelslike = feelslike;
        this.icon = icon;
        this.temp = temp;
        this.winddir = winddir;
        this.windspeed = windspeed;
    }
    async render() {

        const image = await import(`../images/icons/${this.icon}.svg`);
        const pointer = await import(`../images/arrow.svg`);
        const units = tempScale.units === 'metric' ? 'k/h' : 'm/h';

        return `
            <div class="box hour">
                <div class="time">${this.datetime}</div>
                <img src="${image.default}" width="128" height="128">
                <div class="temp">${this.temp} °</div>
                <div class="wind">
                    <img src="${pointer.default}" width="16" height="16" style="--rotate: ${this.winddir}deg">
                    <span class="speed">${this.windspeed} ${units}</span>
                </div>
            </div>
        `;
    }
}
function createHour(data) {

    const hour = new Hour(data);
    return hour.render();
}

export default createHour;