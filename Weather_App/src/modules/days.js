
class Day {

    constructor(
        {conditions, datetimeEpoch, icon, tempmax, tempmin}
    ) {
        this.conditions = conditions;
        this.datetimeEpoch = datetimeEpoch;
        this.icon = icon;
        this.tempmax = tempmax;
        this.tempmin = tempmin;
    }
    convert() {
        const date = new Date(this.datetimeEpoch * 1000);
        const options = {weekday: 'short', day: 'numeric', month: 'short'};
        return date.toLocaleString('en-US', options);
    }
    round (temperature) {
        if (temperature % 1 < 0.5) {
            return Math.floor(temperature);
        } else {
            return Math.ceil(temperature);
        }
    }
    async render() {
        const image = await import(`../images/icons/${this.icon}.svg`);

        return `
            <div class="day">
                ${this.conditions},
                ${this.convert()},
                <img src="${image.default}" width="128" height="128">
                Max: ${this.round(this.tempmax)},
                Min: ${this.round(this.tempmin)},
            </div>
        `;
    }
}
function createDay(data) {

    const day = new Day(data);
    return day.render();
}

export default createDay;