
class Hour {

    constructor (
        {datetime, feelslike, icon, temp}
    ) {
        this.datetime = datetime.slice(0, 5);
        this.feelslike = feelslike;
        this.icon = icon;
        this.temp = temp;
    }
    async render() {
        const image = await import(`../images/icons/${this.icon}.svg`);

        return `
            <div class="box hour">
                <div class="time">${this.datetime}</div>
                <img src="${image.default}" width="128" height="128">
                <div class="temp">${this.temp}</div>
                <div class="fiels">${this.feelslike}</div>
            </div>
        `;
    }
}
function createHour(data) {

    const hour = new Hour(data);
    return hour.render();
}

export default createHour;