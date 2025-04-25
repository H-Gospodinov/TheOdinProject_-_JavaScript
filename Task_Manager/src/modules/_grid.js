import Task from "./_task.js";
import sampleData from './_data.json';

let newTask = '';

for (const data of sampleData) {
    const values = Object.values(data);
    createTask(values);
}

function createTask(data) {

    const content = new Task(...data);
    const html = content.render();
    newTask += html;
}

function createGrid() {

    return `
        <div class="grid">
            ${newTask}
        </div>
    `;
}
export default createGrid;