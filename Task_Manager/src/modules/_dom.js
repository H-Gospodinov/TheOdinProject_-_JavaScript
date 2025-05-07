import {currentData, currentLabels, currentFilter} from "./_data.js";
import {createLabel, createOption} from "./_label.js";
import createTask from "./_task.js";

const grid = document.querySelector('.grid');
const menu = document.querySelector('.labels');
const select = document.querySelector('select#label');

let tasks = []; // visible tasks
let labels = []; // available labels
let options = ['<option value="">none</option>'];

// CREATE CONTENT

function createContent() {

    function handleTasks(target, state) {

        tasks.length = 0;

        for (const data of target) {

            switch(state) { // skip if

                case 'active':
                    if (data.completed) continue; break;

                case 'completed':
                    if (!data.completed) continue;
            }
            tasks.push( createTask(data) ); // render
        }
        grid.innerHTML = tasks.reverse().join('');
    }

    return {

        createTasks: () => {

            handleTasks(currentData, 'active');
        },

        createLabels: () => {

            labels.length = 0;
            options.length = 1;

            for (const name of currentLabels) {

                if (!name) continue; // skip

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

            handleTasks(currentFilter, 'active');
        },

        showArchive: () => {

            handleTasks(currentData, 'completed');
        },
    }
}
// UPDATE CONTENT

document.addEventListener('dataChange', () => {

    createContent().createTasks();
    createContent().createLabels();
    currentFilter.length = 0;
});

document.addEventListener('dataFilter', () => {

    createContent().filterTasks();
    createContent().createLabels();
});

document.addEventListener('dataMove', () => {

    createContent().showArchive();
});

export default createContent;