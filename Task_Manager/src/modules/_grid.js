import Task from "./_task.js";
import sampleData from './_data.json';

let tasks = [];

function createTask(data) {
    // expects array of arguments
    const task = new Task(...data);
    tasks.push(task.render());
}

for (const data of sampleData) {
    const values = Object.values(data);
    createTask(values);
}

function createGrid() {
    return `
        <div class="grid">
            ${tasks.join('')}
        </div>
    `;
}
export default createGrid;