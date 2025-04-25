import {currentData, createTask} from "./_data.js";

let tasks = []; // all tasks

function updateTasks() {

    tasks.length = 0; // reset

    for (const data of currentData) {
        const task = createTask(data);
        tasks.push(task);
    }
} updateTasks();

document.addEventListener('dataChange', updateTasks);

function createGrid() {
    return `
        <div class="grid">
            ${tasks.join('')}
        </div>
    `;
}
export default createGrid;