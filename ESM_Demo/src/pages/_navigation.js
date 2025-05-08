
const tabs = [
    {
        id: 'tab_1', text: 'Home page',
    },
    {
        id: 'tab_2', text: 'Some page',
    },
];

function createNavBar() {

    const content = tabs.map(item => {
        return `
            <button class="tab" id="${item.id}" type="button">
                <span>${item.text}</span>
            </button>`
    });
    return content.join('');
}

export default createNavBar;