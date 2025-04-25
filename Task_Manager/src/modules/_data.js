import sampleData from './_data.json';
import Task from "./_task.js";

let currentData = sampleData;

function updateData(newData) {

    currentData.push(newData);
    const event = new CustomEvent('dataChange');
    document.dispatchEvent(event);
}
function createTask(data) {
    // expects a single object
    const task = new Task(data);
    return task.render();
}
export {currentData, updateData, createTask};