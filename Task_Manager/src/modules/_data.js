import sampleData from './_data.json';
import {setInput} from "./_input.js";

let currentData = sampleData;

for (const item of currentData) {
    item.id = crypto.randomUUID();
}
function updateData(newData, editData, removeData) {

    // CREATE TASK

    if (newData) {
        // check existing
        if (newData.id) {
            const index = currentData.findIndex(item => {
                return item.id === newData.id;
            });
            if (index > -1) {
                currentData.splice(index, 1);
                currentData.splice(index, 0, newData);
            }
        } // replace existing 🡑
        else {
            newData.id = crypto.randomUUID();
            currentData.push(newData);
        } // add new 🡑
    }

    // UPDATE TASK

    else if (editData) {
        const data = currentData.find(item => {
            return item.id === editData;
        });
        setInput(data);
    }

    // DELETE TASK

    else if (removeData) {
        const index = currentData.findIndex(item => {
            return item.id === removeData;
        });
        if (index > -1) {
            currentData.splice(index, 1);
        }
    }
    // TRIGGER EVENT

    const event = new CustomEvent('dataChange');
    document.dispatchEvent(event);
}
export {currentData, updateData};