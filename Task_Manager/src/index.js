
//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import createContent from "./modules/_dom.js";
import {updateData} from "./modules/_data.js";

const grid = document.querySelector('.grid');
const menu = document.querySelector('.labels');
const modal = document.querySelector('.modal');

const taskForm = document.querySelector('#task_form');
const labelForm = document.querySelector('#label_form');
const labelSelect = document.querySelector('select#label');

// (RE)CREATE PAGE

const render = createContent();

grid.innerHTML = render.createGrid();
menu.innerHTML = render.createMenu();
labelSelect.innerHTML += render.createOptions();

document.addEventListener('dataChange', () => {
    grid.innerHTML = render.createGrid();
});

// EVENT HANDLERS

document.addEventListener('click', (e) => {

    const button = e.target;
    const parent = button.closest('.task');

    function updateForm(text, show, hide) {

        show.hidden = false;
        hide.hidden = true;

        const elements = ['.title','.submit'];
        for (const element of elements) {
            modal.querySelector(element).innerText = text;
        }
        modal.classList.add('active');
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

        case 'edit_label':
            //
            break;

        case 'remove_label':
            //
            break;

        case 'closer':
            modal.classList.remove('active');
            break;
    }
}); document.addEventListener('change', (e) => {

    const element = e.target;

    if (element.type === 'checkbox') {
        element.value = element.checked ? 'high' : 'low';
    }
});