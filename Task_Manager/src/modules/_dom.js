import {currentData, currentLabels, currentFilter} from "./_data.js";
import {createLabel, createOption} from "./_label.js";
import createTask from "./_task.js";

const grid = document.querySelector('.grid');
const menu = document.querySelector('.labels');
const select = document.querySelector('select#label');

let tasks = []; // all tasks
let labels = []; // all labels
let options = ['<option value="">none</option>'];

// CREATE CONTENT

function createContent() {

    return {

        createTasks: () => {

            tasks.length = 0;

            for (const data of currentData) {

                if (data.completed) continue; // skip old

                tasks.push(
                    createTask(data) // render
                );
            }
            grid.innerHTML = tasks.reverse().join('');
        },

        createLabels: () => {

            labels.length = 0;
            options.length = 1;

            for (const name of currentLabels) {

                if (!name) continue; // skip empty

                labels.push(
                    createLabel(name) // render
                );
                options.push(
                    createOption(name) // render
                );
            }
            menu.innerHTML = labels.join('');
            select.innerHTML = options.join('');
        },

        filterTasks: () => {

            tasks.length = 0;

            for (const data of currentFilter) {

                if (data.completed) continue; // skip old

                tasks.push(
                    createTask(data) // render
                );
            }
            grid.innerHTML = tasks.reverse().join('');
        },

        showArchive: () => {

            tasks.length = 0;

            for (let data of currentData) {

                if (!data.completed) continue; // skip active

                tasks.push(
                    createTask(data) // render
                );
            }
            grid.innerHTML = tasks.reverse().join('');
        },
    }
}
// UPDATE CONTENT

document.addEventListener('dataChange', () => {
    createContent().createTasks();
    createContent().createLabels();
});
document.addEventListener('dataFilter', () => {
    createContent().filterTasks();
});
document.addEventListener('dataMove', () => {
    createContent().showArchive();
});

export default createContent;