import {updateData} from "./_data.js";

const dataForm = document.querySelector('#task_form');
const inputs = dataForm.querySelectorAll('.input');
const checkbox = dataForm.querySelector('#priority');
const label = document.querySelector('#new_label');

function getInput() {

    const data = {}; // must be object

    for (const input of inputs) {
        data[input.id] = input.value || '';
    }
    updateData(data);
}

function setInput(data, type) {

    if (type === 'label') {
        label.value = data.id;
        return;
    }
    const values = [];

    for (const key in data) {
        values.push(data[key]);
    }
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = values[i];
    }
    if (data.priority === 'high') {
        checkbox.checked = true;
    }
    else {
        checkbox.checked = false;
    }
}
export {getInput, setInput};