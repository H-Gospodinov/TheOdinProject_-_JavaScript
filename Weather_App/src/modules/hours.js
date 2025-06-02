import {tempScale} from "./weather.js";

class Hour {

    constructor (
        {datetime, icon, temp, winddir, windspeed}
    ) {
        this.datetime = datetime.slice(0, 2);
        this.icon = icon;
        this.temp = temp;
        this.winddir = winddir;
        this.windspeed = windspeed;
    }
    format () {
        const hour = parseInt(this.datetime, 10);
        const period = hour >= 12 ? 'PM' : 'AM';
        return `${hour} <small>${period}</small>`;
    }
    split (value) {

        const [integer, decimal] = value.toString().split('.');
        if (!decimal) return integer;
        else return integer + `<small>${decimal}</small>`;
    }
    async render() {

        const image = await import(`../images/icons/${this.icon}.svg`);
        const pointer = await import(`../images/arrow.svg`);
        const units = tempScale.units === 'metric' ? 'k/h' : 'm/h';

        return `
            <div class="box hour">
                <div class="time">${this.format()}</div>
                <img class="image" src="${image.default}" width="128" height="128">
                <div class="temp">${this.split(this.temp)} °</div>
                <div class="wind">
                    <img src="${pointer.default}" width="16" height="16" style="--rotate: ${this.winddir}deg">
                    <span class="speed">${this.windspeed} &nbsp;${units}</span>
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