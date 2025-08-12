
class Label {

    constructor(name) {
        this.name = name;
    }
    select() {
        return `<option value="${this.name}">${this.name}</option>`;
    }
    render() {
        return `
            <li class="nav-item label" id="${this.name}">
                <button class="nav-link" type="button">${this.name}</button>
                <div class="action">
                    <button class="label-btn" id="edit_label" type="button" title="edit"></button>
                    <button class="label-btn" id="remove_label" type="button" title="remove"></button>
                </div>
            </li>
        `;
    } // single input
}
function createLabel(name) {
    const label = new Label(name);
    return label.render();
}
function createOption(name) {
    const option = new Label(name);
    return option.select();
}
export {createLabel, createOption};