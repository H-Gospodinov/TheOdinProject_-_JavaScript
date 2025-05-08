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


    function triggerEvent() {
        if (currentFilter.length) {
            document.dispatchEvent(dataFilter);
        }
        else document.dispatchEvent(dataChange);
    }

    function spliceData(target, data, type, mode) {

        const index = target.findIndex(item => {

            switch (type) { // task or label

                case 'task': return item.id === data.id;
                case 'label': return item === data.id;
                case 'else': return item === editLabel.id;
            }
        }); if (index < 0) return;

        switch (mode) { // replace or remove

            case 'replace': target.splice(index, 1, data); break;
            case 'remove': target.splice(index, 1);
        }
    }

    function updateLabels(old, New) {

        for (const item of currentData) {
            if (item.label === old.id) {
                item.label = New;
            }
        } // update assigned labels
    }

    return {

        newData: (data, type) => {

            switch(type) {

                case 'task': // create task

                    if (data.id) { // check existing

                        spliceData(currentData, data, 'task', 'replace');
                        currentFilter.length ?
                        spliceData(currentFilter, data, 'task', 'replace') : null;
                    }
                    else {
                        data.id = crypto.randomUUID();
                        currentData.push(data);
                    }
                    break;

                case 'label': // create label

                    if (currentLabels.includes(data)) {
                        alert(`"${data}" is already added`);
                        return; // name taken
                    }
                    else if (editLabel.id) {

                        spliceData(currentLabels, data, 'else', 'replace');
                        updateLabels(editLabel, data);
                        editLabel.id = ''; // reset
                    }
                    else {
                        currentLabels.push(data); // add new
                    }
                    break;
            }
            triggerEvent();
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

                        case 'archive':
                            currentFilter = currentData.filter(item => {
                                return item.completed;
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

                    spliceData(currentData, data, 'task', 'remove');

                    if (currentFilter.length) {

                        spliceData(currentFilter, data, 'task', 'remove');
                        if (!currentFilter.length) {
                            document.dispatchEvent(dataFilter); // no results
                            return;
                        }
                    } break;

                case 'label': // delete label

                    spliceData(currentLabels, data, 'label', 'remove');
                    updateLabels(data, '');
            }
            triggerEvent();
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
            }
            triggerEvent();
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

export {currentData, currentLabels, currentFilter, currentTime, updateData};