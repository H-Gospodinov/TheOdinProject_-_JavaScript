import icon from "../img/icon.png";
import createText from "./_textbox.js";

function createInfoPage() {
    return `<img src="${icon}" width="150" alt="">` + createText();
}
export default createInfoPage;