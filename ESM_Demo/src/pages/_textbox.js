
const paragraphs = [
    {
        text: 'Component-based website prototype with no static content, just a demo for ES6 Modules & Webpack bundling.'
    },
    {
        text: 'Check source code on <a href="https://github.com/H-Gospodinov/TheOdinProject_-_JavaScript" target="_blank" rel="noopener">GitHub</a>'
    },
];

function createText() {

    const content = paragraphs.map(item => {
        return `<p>${item.text}</p>`;
    });
    return `<div class="reader">${content.join('')}</div>`;
}

export default createText;