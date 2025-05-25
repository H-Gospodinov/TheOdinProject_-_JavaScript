
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
        const options = { weekday: 'short', day: 'numeric', month: 'short',
                          hour: '2-digit', minute: '2-digit', hour12: false };
        return date.toLocaleString('en-US', options);
    }
    async render() {
        const image = await import(`../images/icons/${this.icon}.svg`);

        return `
            <div class="box current">
                <div class="date">${this.convert()}</div>
                <div class="temp">
                    <img src="${image.default}" width="104" height="104">
                    <span>${this.temp}</span>
                </div>
                <div class="details">
                    <div class="feels">Feels like: ${this.feelslike}</div>
                    <div class="info">${this.description}</div>
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