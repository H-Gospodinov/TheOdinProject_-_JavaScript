
class Hour {

    constructor (
        {datetime, icon, temp}
    ) {
        this.datetime = datetime.slice(0, 5);
        this.icon = icon;
        this.temp = temp;
    }
    async render() {
        const image = await import(`../images/icons/${this.icon}.svg`);

        return `
            <div class="hour">
                ${this.datetime},
                <img src="${image.default}" width="128" height="128">
                ${this.temp},
            </div>
        `;
    }
}
function createHour(data) {

    const hour = new Hour(data);
    return hour.render();
}

export default createHour;