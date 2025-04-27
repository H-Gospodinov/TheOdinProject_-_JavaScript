
//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import createGrid from "./modules/_grid.js";
import {updateData} from "./modules/_data.js";

const container = document.querySelector('#content')

// (RE)CREATE GRID

container.innerHTML = createGrid();

document.addEventListener('dataChange', () => {
    container.innerHTML = createGrid();
});

// EVENT HANDLERS

container.addEventListener('click', (e) => {

    const button = e.target;
    const parent = button.closest('div');

    switch(button.id) {

        case 'edit':
            updateData(null, parent);
            break;

        case 'delete':
            updateData(null, null, parent);
            break;
    }
});