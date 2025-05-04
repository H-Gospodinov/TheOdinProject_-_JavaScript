import sampleData from './_data.json';
import {setInput, editLabel} from "./_input.js";

let currentData = sampleData;
let currentLabels = [];

// SAMPLE DATA

for (const item of currentData) {
    item.id = crypto.randomUUID();
    // skip existing
    if (!currentLabels.includes(item.label)) {
        currentLabels.push(item.label);
    }
}
// UPDATE DATA

function updateData() {

    // custom event for data changes
    const dataChange = new CustomEvent('dataChange');

    return {

        newData: (data, type) => {

            switch(type) {

                case 'task': // create task

                    if (data.id) {
                        const index = currentData.findIndex(item => {
                            return item.id === data.id;
                        });
                        if (index > -1) {
                            currentData.splice(index, 1, data); // replace
                        }
                    } else {
                        data.id = crypto.randomUUID();
                        currentData.push(data); // add new
                    }
                    break;

                case 'label': // create label

                    if (currentLabels.includes(data)) {
                        alert(`"${data}" is already added`);
                        return; // name taken
                    }
                    else if (editLabel.id) {

                        const index = currentLabels.findIndex(item => {
                            return item === editLabel.id;
                        });
                        if (index > -1) {
                            currentLabels.splice(index, 1, data); // replace
                        }
                        for (const item of currentData) {
                            if (item.label === editLabel.id) {
                                item.label = data;
                            }
                        } editLabel.id = ''; // reset
                    }
                    else {
                        currentLabels.push(data); // add new
                    }
                    break;
            }
            document.dispatchEvent(dataChange);
        },

        editData: (data, type) => {

            switch(type) {

                case 'task': // edit task

                    const task = currentData.find(item => {
                        return item.id === data.id;
                    });
                    setInput(task, type);
                    break;

                case 'label': // edit label

                    setInput(data, type);
                    break;
            }
        },

        clearData: (data, type) => {

            switch(type) {

                case 'task': // delete task

                    const taskIndex = currentData.findIndex(item => {
                        return item.id === data.id;
                    });
                    if (taskIndex > -1) {
                        currentData.splice(taskIndex, 1);
                    } break;

                case 'label': // delete label

                    currentLabels = currentLabels.filter(item => {
                        return item !== data.id;
                    });
                    for (const item of currentData) {
                        if (item.label === data.id) {
                            item.label = '';
                        }
                    } break;
            }
            document.dispatchEvent(dataChange);
        },
    }
}
export {currentData, currentLabels, updateData};