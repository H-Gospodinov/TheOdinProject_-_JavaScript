import sampleData from './_data.json';
import {setInput, editLabel} from "./_input.js";

let currentData = sampleData;
let currentLabels = [];

for (const item of currentData) {
    item.id = crypto.randomUUID();
    // skip existing
    if (!currentLabels.includes(item.label)) {
        currentLabels.push(item.label);
    }
}
function updateData(newData, newLabel, editData, removeData) {

    // CREATE TASK

    if (newData) {
        // check existing
        if (newData.id) {
            const index = currentData.findIndex(item => {
                return item.id === newData.id;
            });
            if (index > -1) {
                currentData.splice(index, 1, newData);
            }
        } // replace existing 🡑
        else {
            newData.id = crypto.randomUUID();
            currentData.push(newData);
        } // add new 🡑
    }

    // CREATE LABEL

    else if (newLabel) {

        if (currentLabels.includes(newLabel)) {
            // name is taken
            alert(`"${newLabel}" is already added`); return;
        }
        else if (editLabel.id) {
            const index = currentLabels.findIndex(item => {
                return item === editLabel.id;
            });
            if (index > -1) {
                currentLabels.splice(index, 1, newLabel);
            }
            for (const item of currentData) {
                if (item.label === editLabel.id) {
                    item.label = newLabel;
                }
            }
            editLabel.id = ''; // reset
        }
        else {
            currentLabels.push(newLabel);
        }
    }

    // UPDATE DATA

    else if (editData) {

        const data = currentData.find(item => {
            return item.id === editData.id;
        });
        if (data) {
            setInput(data, 'taskForm');
        }
        else {
            setInput(editData, 'labelForm')
        }
    }

    // DELETE DATA

    else if (removeData) {

        const taskIndex = currentData.findIndex(item => {
            return item.id === removeData.id;
        });
        const labelIndex = currentLabels.findIndex(item => {
            return item === removeData.id;
        });
        if (taskIndex > -1) {
            currentData.splice(taskIndex, 1);
        }
        if (labelIndex > -1) {
            currentLabels.splice(labelIndex, 1);
        }
        for (const item of currentData) {
            if (item.label === removeData.id) {
                item.label = '';
            }
        }
    }
    // TRIGGER EVENT

    const event = new CustomEvent('dataChange');
    document.dispatchEvent(event);
}
export {currentData, currentLabels, updateData};