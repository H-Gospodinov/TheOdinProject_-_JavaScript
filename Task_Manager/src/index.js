
//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import {createGrid, createMenu} from "./modules/_dom.js";
import {updateData} from "./modules/_data.js";

const content = document.querySelector('.content');
const labels = document.querySelector('.labels');
const modalBox = document.querySelector('.modal');

const taskForm = document.querySelector('#task_form');
const labelForm = document.querySelector('#label_form');

// (RE)CREATE GRID

content.innerHTML = createGrid();

document.addEventListener('dataChange', () => {
    content.innerHTML = createGrid();
});

// (RE)CREATE MENU

labels.innerHTML = createMenu();

// document.addEventListener('dataChange', () => {
//     labels.innerHTML = createMenu();
// });

// EVENT HANDLERS

document.addEventListener('click', (e) => {

    const button = e.target;
    const parent = button.closest('.task');

    function updateForm(text, show, hide) {

        show.hidden = false;
        hide.hidden = true;

        const elements = ['.title','.submit'];
        for (const element of elements) {
            modalBox.querySelector(element).innerText = text;
        }
        modalBox.classList.add('active');
    }

    switch(button.id) {

        case 'add_task':
            taskForm.reset();
            taskForm.querySelector('#priority').value = '';
            taskForm.querySelector('#id').value = '';
            updateForm('Add new task', taskForm, labelForm);
            break;

        case 'edit_task':
            updateData(null, parent);
            updateForm('Edit task', taskForm, labelForm);
            break;

        case 'remove_task':
            updateData(null, null, parent);
            break;

        case 'add_label':
            labelForm.reset();
            updateForm('Create label', labelForm, taskForm);
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