//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import createContent from "./modules/_dom.js";
import {updateData} from "./modules/_data.js";
import {getInput} from "./modules/_input.js";

const modal = document.querySelector('.modal');
const title = document.querySelector('.header h1');

const taskForm = document.querySelector('#task_form');
const labelForm = document.querySelector('#label_form');

// CREATE PAGE

const render = createContent();

render.createTasks();
render.createLabels();

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

    (function updateText() {

        if (button.className !== 'nav-link') {
            return;
        }
        if (button.id) {
            title.innerText = button.textContent;
        }
        else title.innerText = parent.label.id;
    })();

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

        case 'close_form':
            modal.classList.remove('active');
            break;

        case 'all_tasks':
            update.newData(); // trigger dataChange
            break;

        case 'important':
            update.filterData(button, 'task');
            break;

        case 'upcoming':
            update.filterData(button, 'task');
            break;

        case 'overdue':
            update.filterData(button, 'task');
            break;

        case '': // labels
            update.filterData(parent.label, 'label');
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