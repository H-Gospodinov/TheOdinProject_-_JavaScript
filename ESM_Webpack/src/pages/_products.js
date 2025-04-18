import greenImage from "../img/mU4vFZw3VP_440.jpg";
import redImage from "../img/ngVcKlCQBY_440.jpg";
import brownImage from "../img/TYmp2rf_440.jpg";
import orangeImage from "../img/wTJaQur2HY_440.jpg";

function htmlBlock(title, image, text, price) {
    return `
    <div class="block">
        <h2>${title}</h2>
        <img src=${image} alt="">
        <p>${text}</p>
        <span><strong>€ ${price}</strong> / kg</span>
    </div>`
}; // source code

const products = [
    { 
        title: 'Green stuff',
        image: greenImage,
        text: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
        price: '2.65'
    },
    {
        title: 'Red stuff',
        image: redImage,
        text: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
        price: '2.49'
    },
    {
        title: 'Brown stuff',
        image: brownImage,
        text: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
        price: '0.90'
    },
    {
        title: 'Orange stuff',
        image: orangeImage,
        text: 'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.',
        price: '2.45'
    },
];
function createProducts() {
    // expects an array of data objects
    const content = products.map(({title, image, text, price}) => {
        return htmlBlock(title, image, text, price);
    }).join('');

    return `<div class="grid">${content}</div>`;
}
export default createProducts;