// import createPlayer from "./player.js";
// import createBoard from "./board.js";
import createShips from "./ships.js";

// 

function createBoard(boards, size) {

    function createLabels(wrapper) {

        for (let i = 1; i <= size; i++) {

            const label = document.createElement('span');

            label.classList.add('label');
            label.innerText = i;
            wrapper.append(label);
        }
        const clone = wrapper.cloneNode(true);
        wrapper.parentNode.append(clone);
    }

    function createGrid(wrapper) {

        for (let i = 0; i < size**2; i++) {
            
            const cell = document.createElement('div');

            cell.classList.add('cell');
            cell.dataset.id = i;
            wrapper.append(cell);
        }
    }
    function placeShips(grid) {

        const ships = createShips(size);

        for (const ship of ships) {

            for (const segment of ship) {

                const index = segment.y * size + segment.x;
                
                for (const cell of grid) {
                    if (cell.dataset.id == index) {
                        cell.classList.add('occupied');
                    }
                } // itterate board
            } // itterate ships
        }
    }
    for (const board of boards) {

        const labels = board.querySelector('.labels');
        const grid = board.querySelector('.grid');

        createLabels(labels);
        createGrid(grid);

        placeShips(grid.children);
    }
}
export default createBoard;