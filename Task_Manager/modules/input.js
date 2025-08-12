import {updateData} from "./data.js";

const taskForm = document.querySelector('#task_form');
const labelForm = document.querySelector('#label_form');
const inputs = taskForm.querySelectorAll('.input');
const checkbox = taskForm.querySelector('#priority');
const label = labelForm.querySelector('#new_label');

const editLabel = {id: ''}; // old label


// GET NEW OR EDITED

function getInput(form) {

    switch(form) {

        case labelForm:

            updateData().newData(label.value, 'label');
            break;

        case taskForm:

            const data = {}; // must be object

            for (const input of inputs) {
                data[input.id] = input.value || '';
            }
            updateData().newData(data, 'task');

        // read form
    }
}

// SET FOR EDITING

function setInput(data, form) {

    switch(form) {

        case 'label':

            label.value = data.id;
            editLabel.id = data.id; // mark old
            break;

        case 'task':

            const values = [];
            const check = data.priority === 'high';

            for (const key in data) {
                values.push(data[key]);
            }
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = values[i];
            }
            checkbox.checked = check ? true : false;

        // fill out
    }
}
export {getInput, setInput, editLabel};