import banner from "../img/banner.jpg";
import createText from "./_textbox.js";
import createProducts from "./_products.js";

const pageTitle = `
    <h1 class="page-title">ESM & Webpack demo</h1>
`;
const heroBanner = `
    <div class="big-banner">
        <img class="hero" src="${banner}" width="1600" height="500" alt="">
    </div>
`;
const textSlider = `
    <div class="carousel">
        <div class="wrapper">
            <button type="button" class="prev"></button>
            <div class="clipper">${createText()}</div>
            <button type="button" class="next"></button>
        </div>
    </div>
`;
function createHomePage() {
    return pageTitle + heroBanner + textSlider + createProducts();
}
export default createHomePage;