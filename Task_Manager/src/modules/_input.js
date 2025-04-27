import {updateData} from "./_data.js";

const dataForm = document.querySelector('#task_form');
const inputs = dataForm.querySelectorAll('.input');

function getInput() {

    const data = {}; // must be object

    for (const input of inputs) {
        data[input.id] = input.value || '';
    }
    updateData(data);
}

dataForm.addEventListener('submit', (e) => {
    // prevent reload
    e.preventDefault();
    getInput();
});

function setInput(data) {

    const values = [];

    for (const key in data) {
        values.push(data[key]);
    }
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = values[i];
    }
}
export default setInput;