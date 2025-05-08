//import "./styles/styles.css"; //excluded to avoid FOUC
import "./styles/media.css"; // include image css

import {createContent, viewArchive} from "./modules/_dom.js";
import {currentFilter, currentTime, updateData} from "./modules/_data.js";
import {getInput} from "./modules/_input.js";

const modal = document.querySelector('.modal');
const title = document.querySelector('.header h1');
const cdate = document.querySelector('.header .date');

const taskForm = document.querySelector('#task_form');
const labelForm = document.querySelector('#label_form');

// CREATE PAGE

const render = createContent();

render.createTasks();
render.createLabels();

cdate.innerText = currentTime();

// UPDATE FORM

function updateForm(text, show, hide) {

    show.hidden = false;
    hide.hidden = true;

    modal.querySelector('.title').innerText = text;
    show.querySelector('.submit').innerText = text;
    modal.classList.add('active');
}

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

    if (button.className === 'nav-link') {
        title.innerText = button.id ?
        button.textContent : parent.label.id;
        viewArchive.state = false;
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

        case 'close_form':
            modal.classList.remove('active');
            break;

        case 'all_tasks':
            currentFilter.length = 0;
            update.newData(); // just trigger dataChange
            break;

        case 'important':
        case 'upcoming':
        case 'overdue':
            update.filterData(button, 'task');
            break;

        case 'archive':
            viewArchive.state = true;
            update.filterData(button, 'task');
            break;

        case 'complete':
            update.archiveData(parent.task, 'archive');
            break;

        case 'restore':
            update.archiveData(parent.task, 'restore');
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
    getInput(e.target);

    if (currentFilter.length && e.target === taskForm) {
        document.querySelector('#all_tasks').click();
    }
    modal.classList.remove('active');
});