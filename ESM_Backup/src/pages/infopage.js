import icon from "../img/logo.png";
import createInfo from "./_textinfo.js";

function createInfoPage() {
    return `<img src="${icon}" width="150" alt="">` + createInfo();
}
export default createInfoPage;