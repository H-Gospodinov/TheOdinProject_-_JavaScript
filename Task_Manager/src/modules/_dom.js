import {currentData} from "./_data.js";
import createLabel from "./_label.js";
import createTask from "./_task.js";

let tasks = []; // all tasks
let labels = []; // all labels
let filter = '' // filter out identical labels

function updatePage(nodes) {

    nodes.length = 0; // reset

    for (const data of currentData) {

        if (nodes === tasks) {
            nodes.push(
                createTask(data) // render
            );
        }
        else if (data.label && data.label !== filter) {
            nodes.push(
                createLabel(data.label) // render
            );
            filter = data.label;
        }
    } // render all
}
updatePage(tasks); // init
updatePage(labels); // init

document.addEventListener('dataChange', () => {
    updatePage(tasks);
});

function createMenu() {
    // do not reverse
    return labels.join('');
}

function createGrid() {
    return `
        <div class="grid">
            ${tasks.reverse().join('')}
        </div>
    `;
}
export {createGrid, createMenu};