
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
    format() {
        const date = new Date(this.datetimeEpoch * 1000);
        const date1 = date.toLocaleString('en-US', {weekday: 'short'});
        const date2 = date.toLocaleString('en-US', {day: 'numeric', month: 'short'});
        return {date1, date2}
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
            <div class="box day">
                <div class="name">${this.format().date1}</div>
                <div class="date">${this.format().date2}</div>
                <img src="${image.default}" width="128" height="128">
                <div class="info">${this.conditions}</div>
                <div class="temp">
                    <span>max:</span>
                    <strong>${this.round(this.tempmax)}</strong>
                    &nbsp;
                    <span>min:</span>
                    <strong>${this.round(this.tempmin)}</strong>
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