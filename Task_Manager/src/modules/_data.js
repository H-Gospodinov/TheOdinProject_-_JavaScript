import sampleData from './_data.json';
import {setInput} from "./_input.js";

let currentData = sampleData;

for (const item of currentData) {
    item.id = crypto.randomUUID();
}
function updateData(newData, oldData, editData) {

    if (newData) {
        newData.id = crypto.randomUUID();
        currentData.push(newData);
    }
    else if (oldData) {
        currentData = currentData.filter(item => {
            return item.id !== oldData
        });
    }
    else if (editData) {
        const object = currentData.find(item => {
            return item.id === editData
        });
        setInput(object);
    }
    // trigger custom event
    const event = new CustomEvent('dataChange');
    document.dispatchEvent(event);
}
export {currentData, updateData};