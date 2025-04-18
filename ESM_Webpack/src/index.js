
//import "./styles.css"; //excluded to avoid FOUC
import createNavBar from "./pages/_navigation.js";
import createHomePage from "./pages/homepage.js";
import createInfoPage from "./pages/infopage.js";

const wrapper = document.querySelector('.container');
const navBar = document.querySelector('#navBar');
const pageBox = document.querySelector('#content');

// HTML INJECTION

function injectContent(target, data) {
    target.insertAdjacentHTML('afterbegin', data);
}
import bckgrnd from "./img/background.jpg";
wrapper.style.backgroundImage = `url(${bckgrnd})`;

// INITIAL LOAD

injectContent(navBar, createNavBar());
const tabs = document.querySelectorAll('.tab');

let currentPage = createHomePage();
injectContent(pageBox, currentPage);

// NAVIGATION

const tabMapping = {
    tab_1: createHomePage(),
    tab_2: createInfoPage()
};
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        currentPage = tabMapping[tab.id];
        pageBox.replaceChildren();
        injectContent(pageBox, currentPage);
    });
});
// SCROLLER

pageBox.addEventListener('click', (e) => {
    const target = e.target;
    if (target.className === 'hero') {
        target.classList.add('fade');
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
            target.classList.remove('fade');
        }, 1000);
    }
});