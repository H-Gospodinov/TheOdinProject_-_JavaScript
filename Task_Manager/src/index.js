
//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import createContent from "./modules/_dom.js";
import {updateData} from "./modules/_data.js";
import {getInput} from "./modules/_input.js";
import {createLabel, createOption} from "./modules/_label.js";

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
            updateData(null, parent.task);
            updateForm('Edit task', taskForm, labelForm);
            break;

        case 'remove_task':
            updateData(null, null, parent.task);
            break;

        case 'add_label':
            labelForm.reset();
            updateForm('Create label', labelForm, taskForm);
            break;

        case 'edit_label':
            updateData(null, parent.label);
            updateForm('Edit label', labelForm, taskForm);
            break;

        case 'remove_label':
            const options = labelSelect.children;
            for (const option of options) {
                if (option.value === parent.label.id) {
                    option.remove();
                }
            } parent.label.remove();
            updateData(null, null, parent.label);
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
    const form = e.target;

    if (form === labelForm) {

        const newLabel = form.new_label.value;

        menu.innerHTML += createLabel(newLabel);
        labelSelect.innerHTML += createOption(newLabel);
    }
    else getInput();
    modal.classList.remove('active');
});