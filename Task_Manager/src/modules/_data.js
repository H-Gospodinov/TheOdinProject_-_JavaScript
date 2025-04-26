import sampleData from './_data.json';
import Task from "./_task.js";

let currentData = sampleData;

for (const item of currentData) {
    item.id = crypto.randomUUID();
}
function updateData(newData, oldData) {

    if (newData) {
        newData.id = crypto.randomUUID();
        currentData.push(newData);
    }
    else if (oldData) {
        currentData = currentData.filter(item => item.id !== oldData);
    }
    // trigger custom event
    const event = new CustomEvent('dataChange');
    document.dispatchEvent(event);
}
function createTask(data) {
    // expects a single object
    const task = new Task(data);
    return task.render();
}
export {currentData, updateData, createTask};