import {updateData} from "./_data.js";

function getInput() {

    const dataForm = document.querySelector('#task_form');

    dataForm.addEventListener('submit', (event) => {

        event.preventDefault(); // prevent reload

        const inputs = dataForm.querySelectorAll('.input');
        const data = {}; // must be object

        for (const input of inputs) {
            data[input.id] = input.value || '...';
        }
        updateData(data);
    });
}
export default getInput;