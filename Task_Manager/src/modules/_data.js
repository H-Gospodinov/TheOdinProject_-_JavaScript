import sampleData from '../data.json';
import {setInput, editLabel} from "./_input.js";

let currentData = sampleData;
let currentLabels = [];
let currentFilter = [];

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

    // custom events for data changes
    const dataChange = new CustomEvent('dataChange');
    const dataFilter = new CustomEvent('dataFilter');
    const dataMove = new CustomEvent('dataMove');

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

        filterData: (data, type) => {

            switch(type) {

                case 'task': // filter by data

                    switch(data.id) {

                        case 'important':
                            currentFilter = currentData.filter(item => {
                                return item.priority === 'high';
                            });
                            break;

                        case 'upcoming':
                            currentFilter = currentData.filter(item => {
                                return item.dueDate >= currentTime();
                            });
                            break;

                        case 'overdue':
                            currentFilter = currentData.filter(item => {
                                return item.dueDate < currentTime();
                            });
                            break;
                    } break;

                case 'label': // filter by label

                    currentFilter = currentData.filter(item => {
                        return item.label === data.id;
                    }); 
                    break;
            }
            document.dispatchEvent(dataFilter);
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

                    const index = currentData.findIndex(item => {
                        return item.id === data.id;
                    });
                    if (index > -1) {
                        currentData.splice(index, 1);
                    }
                    if (data.dataset.type === 'archive') {
                        document.dispatchEvent(dataMove);
                        return;
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

        archiveData: (data, type) => {

            let task = currentData.find(item => {
                return item.id === data.id;
            });
            
            switch(type) {

                case 'archive':
                    task.completed = true;
                    break;

                case 'restore':
                    task.completed = false;
                    document.dispatchEvent(dataMove);
                    return;
            }
            document.dispatchEvent(dataChange);
        },
    }
}
// CURRENT TIME

function currentTime() {

    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export {currentData, currentLabels, currentFilter, updateData};