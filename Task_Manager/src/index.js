
//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import createContent from "./modules/_dom.js";
import {updateData} from "./modules/_data.js";
import {getInput} from "./modules/_input.js";

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
labelSelect.innerHTML = render.createOptions();

document.addEventListener('dataChange', () => {

    grid.innerHTML = render.createGrid();
    menu.innerHTML = render.createMenu();
    labelSelect.innerHTML = render.createOptions();
});

// EVENT HANDLERS

const update = updateData();

document.addEventListener('click', (e) => {

    if (e.target.tagName !== 'BUTTON') {
        return;
    }
    const button = e.target;
    const parent = {
        task: button.closest('.task'),
        label: button.closest('.label')
    };

    function updateForm(text, show, hide) {

        show.hidden = false;
        hide.hidden = true;

        modal.querySelector('.title').innerText = text;
        show.querySelector('.submit').innerText = text;
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
            update.editData(parent.task, 'task');
            updateForm('Edit task', taskForm, labelForm);
            break;

        case 'remove_task':
            update.clearData(parent.task, 'task');
            break;

        case 'add_label':
            labelForm.reset();
            updateForm('Create label', labelForm, taskForm);
            break;

        case 'edit_label':
            update.editData(parent.label, 'label');
            updateForm('Edit label', labelForm, taskForm);
            break;

        case 'remove_label':
            update.clearData(parent.label, 'label');
            break;

        case 'closer':
            modal.classList.remove('active');
            break;
    }
});

document.addEventListener('change', (e) => {

    const element = e.target;
    if (element.type === 'checkbox') {
        element.value = element.checked ? 'high' : 'low';
    }
});

document.addEventListener('submit', (e) => {

    e.preventDefault();
    getInput(e.target); //
    modal.classList.remove('active');
});