import {currentData, currentLabels, currentFilter} from "./data.js";
import {createLabel, createOption} from "./label.js";
import createTask from "./task.js";

const grid = document.querySelector('.grid');
const menu = document.querySelector('.labels');
const select = document.querySelector('select#label');

let tasks = []; // visible tasks
let labels = []; // available labels
let options = ['<option value="">none</option>'];

let viewArchive = {state: false};

// CREATE CONTENT

function createContent() {

    function handleTasks(target) {

        tasks.length = 0;

        for (const data of target) {

            if (data.completed && !viewArchive.state ||
                !data.completed && viewArchive.state) {
                continue; // skip
            }
            tasks.push( createTask(data) ); // render
        }
        grid.innerHTML = tasks.reverse().join('');
    }

    return {

        createTasks: () => {

            handleTasks(currentData);
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
            handleTasks(currentFilter);
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

export {createContent, viewArchive};