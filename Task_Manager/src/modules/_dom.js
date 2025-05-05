import {currentData, currentLabels, currentFilter} from "./_data.js";
import {createLabel, createOption} from "./_label.js";
import createTask from "./_task.js";

let tasks = []; // all tasks
let labels = []; // all labels
let options = ['<option value="">none</option>'];

function updatePage() {

    tasks.length = 0;
    labels.length = 0;
    options.length = 1;

    for (const data of currentData) {
        tasks.push(
            createTask(data) // render
        );
    }
    for (const name of currentLabels) {
        if (!name) continue;
        labels.push(
            createLabel(name) // render
        );
        options.push(
            createOption(name) // render
        );
    }
} updatePage();

function filterPage() {

    tasks.length = 0;

    for (const data of currentFilter) {
        tasks.push(
            createTask(data) // render
        );
    }
}
document.addEventListener('dataChange', updatePage);
document.addEventListener('dataFilter', filterPage);

function createContent() {
    return {
        createGrid: () => tasks.reverse().join(''),
        createMenu: () => labels.join(''),
        createOptions: () => options.join('')
    }
}
export default createContent;