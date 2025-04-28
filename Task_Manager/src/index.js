
//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import createGrid from "./modules/_grid.js";
import {updateData} from "./modules/_data.js";

const content = document.querySelector('.content');
const modalBox = document.querySelector('.modal');

// (RE)CREATE GRID

content.innerHTML = createGrid();

document.addEventListener('dataChange', () => {
    content.innerHTML = createGrid();
});

// EVENT HANDLERS

document.addEventListener('click', (e) => {

    const button = e.target;
    const parent = button.closest('div');

    function changeText(elements, text) {

        for (const element of elements) {
            modalBox.querySelector(element).innerText = text;
        }
    }

    switch(button.id) {

        case 'change':
            updateData(null, parent);
            changeText(['.title','.submit'],'Edit task');
            modalBox.classList.add('active');
            break;

        case 'delete':
            updateData(null, null, parent);
            break;

        case 'add_task':
            modalBox.querySelector('#task_form').reset();
            modalBox.querySelector('#id').value = '';
            changeText(['.title','.submit'],'Add new task');
            modalBox.classList.add('active');
            break;

        case 'closer':
            modalBox.classList.remove('active');
            break;
    }
}); document.addEventListener('change', (e) => {

    const element = e.target;

    if (element.type === 'checkbox') {
        element.value = element.checked ? 'high' : 'low';
    }
});