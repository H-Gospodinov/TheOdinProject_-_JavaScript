import banner from "../img/banner.jpg";
import createText from "./_textbox.js";
import createProducts from "./_products.js";

const elements = [
    {
        title: '<h1 class="page-title">ES6 modules demo</h1>'
    },
    {
        banner: `<div class="big-banner">
                    <img class="hero" src="${banner}" width="1600" height="500" alt="">
                </div>`
    },
    {
        slider: `<div class="carousel">
                    <div class="wrapper">
                        <button type="button" class="prev"></button>
                        <div class="clipper">${createText()}</div>
                        <button type="button" class="next"></button>
                    </div>
                </div>`
    },
];
function createHomePage() {

    const content = elements.map(item => {
        return Object.values(item);
    });
    return content.join('') + createProducts();
}

export default createHomePage;