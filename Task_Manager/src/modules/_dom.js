import {currentData} from "./_data.js";
import {createLabel, createOption} from "./_label.js";
import createTask from "./_task.js";

let tasks = [];
let labels = [];
let options = [];
let filter = '' // filter out identical labels

function updatePage(nodes) {

    nodes.length = 0;
    options.length = 0;

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
            options.push(
                createOption(data.label) // render
            );
            filter = data.label;
        }
    } // render all
}
updatePage(tasks);
updatePage(labels);

document.addEventListener(
    'dataChange', () => {
    updatePage(tasks);
});

function createContent() {
    return {
        createGrid: () => tasks.reverse().join(''),
        createMenu: () => labels.join(''),
        createOptions: () => options.join('')
    }
}
export default createContent;