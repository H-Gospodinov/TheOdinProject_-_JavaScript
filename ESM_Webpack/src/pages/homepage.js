import banner from "../img/banner.jpg";
import createInfo from "./_textinfo.js";
import createProducts from "./_products.js";

const pageTitle = `
    <h1 class="page-title">ESM & Webpack demo</h1>
`;
const heroBanner = `
    <div class="big-banner">
        <img class="hero" src="${banner}" width="1600" height="500" alt="">
    </div>
`;
function createHomePage() {
    return pageTitle + heroBanner + createInfo() + createProducts();
}
export default createHomePage;