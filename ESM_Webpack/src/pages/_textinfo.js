const info = [
    {
        text: 'Component-based website prototype with no static content, just a demo for ES6 Modules & Webpack bundling.'
    },
    {
        text: `Check source code on <a href="https://github.com/H-Gospodinov/TheOdinProject_-_JavaScript/tree/main/ESM_Webpack" target="_blank" rel="noopener">GitHub</a>`
    },
];
function createInfo() {
    // expects an array of data objects
    const content = info.map(item => {
        return `<p>${item.text}</p>`;
    }).join('');

    return `<div class="info">${content}</div>`;
}
export default createInfo;