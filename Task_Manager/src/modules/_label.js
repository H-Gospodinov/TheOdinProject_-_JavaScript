
class Label {

    constructor(name) {
        this.name = name;
    }
    render() {
        return `
            <li class="nav-item label">
                <button class="nav-link" type="button">${this.name}</button>
                <div class="action">
                    <button class="manage" id="edit_label" type="button" title="edit"></button>
                    <button class="manage" id="remove_label" type="button" title="remove"></button>
                </div>
            </li>
        `;
    } // single input
}
function createLabel(name) {
    const label = new Label(name);
    return label.render();
}
export default createLabel;