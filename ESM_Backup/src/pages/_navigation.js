const tabs = [
    {
        id: 'tab_1',
        text: 'Home page'
    },
    {
        id: 'tab_2',
        text: 'Some page'
    },
];
function createNavBar() {
    // expects an array of data objects
    return tabs.map(({id, text}) => {
        return `<button class="tab" id="${id}">${text}</button>`;
    }).join('');
}
export default createNavBar;