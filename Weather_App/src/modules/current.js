
class Current {

    constructor(
        {datetimeEpoch, feelslike, icon, temp}, description
    ) {
        this.datetimeEpoch = datetimeEpoch;
        this.description = description;
        this.feelslike = feelslike;
        this.icon = icon;
        this.temp = temp;
    }
    convert() {
        const date = new Date(this.datetimeEpoch * 1000);
        const options = {weekday: 'short', day: 'numeric', month: 'short'};
        return date.toLocaleString('en-US', options);
    }
    async render() {
        const image = await import(`../images/icons/${this.icon}.svg`);

        return `
            <div class="day">
                ${this.convert()},
                ${this.description},
                Feels like: ${this.feelslike},
                <img src="${image.default}" width="128" height="128">
                ${this.temp},
            </div>
        `;
    }
}
function createCurrent(data, text) {

    const current = new Current(data, text);
    return current.render();
}

export default createCurrent;