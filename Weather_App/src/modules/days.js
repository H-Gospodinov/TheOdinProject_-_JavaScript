import {tempScale} from "./weather.js";

class Day {

    constructor(
        {conditions, datetimeEpoch, icon, tempmax, tempmin, winddir, windspeed}
    ) {
        this.conditions = conditions;
        this.datetimeEpoch = datetimeEpoch;
        this.icon = icon;
        this.tempmax = tempmax;
        this.tempmin = tempmin;
        this.winddir = winddir;
        this.windspeed = windspeed;
    }
    format() {
        const date = new Date(this.datetimeEpoch * 1000);
        const date1 = date.toLocaleString('en-US', {weekday: 'short'});
        const date2 = date.toLocaleString('en-US', {day: 'numeric', month: 'short'});
        return {date1, date2}
    }
    round (value) {
        if (value % 1 < 0.5) {
            return Math.floor(value);
        }
        else return Math.ceil(value);
    }
    async render() {

        const image = await import(`../images/icons/${this.icon}.svg`);
        const pointer = await import(`../images/arrow.svg`);
        const units = tempScale.units === 'metric' ? 'k/h' : 'm/h';

        return `
            <div class="box day">
                <div class="date">
                    <div class="name">${this.format().date1}</div>
                    <div class="time">${this.format().date2}</div>
                </div>
                <img class="image" src="${image.default}" width="128" height="128" alt="">
                <div class="info">${this.conditions}</div>
                <div class="temp">
                    <span class="min">${this.round(this.tempmin)} °</span>
                    <span class="sep">/&nbsp</span>
                    <span class="max">${this.round(this.tempmax)} °</span>
                </div>
                <div class="wind">
                    <img src="${pointer.default}" width="16" height="16" style="--rotate: ${this.winddir}deg" alt="">
                    <span class="speed">${this.windspeed} &nbsp;${units}</span>
                </div>
            </div>
        `;
    }
}
function createDay(data) {

    const day = new Day(data);
    return day.render();
}

export default createDay;