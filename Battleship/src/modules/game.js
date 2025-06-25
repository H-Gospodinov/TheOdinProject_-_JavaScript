import Ship from "./ships.js";
import Player from "./player.js";

let currentPlayer;
let humanFleet, computerFleet;

// PERFORM ACTION

function performAction(area) {

    return { // factory

        createShips: () => {

            const fleet = new Set();
            const sizes = [4, 3, 3, 2, 2, 1, 1, 1];

            for (let size of sizes) {

                new Ship(area, size).create(fleet);
            }
            if (humanFleet) computerFleet = fleet;
            else humanFleet = fleet;

            return fleet;
        },

        selectPlayer: () => { // random start

            currentPlayer = Math.random() < 0.5 ? 0 : 1;
            return currentPlayer;
        },

        performAttack(target) { // no arrow

            const now = target ? 'human' : 'computer';
            const action = Player(area).attack(target, now);

            this.switchPlayer(); return action;
        },

        switchPlayer: () => {

            switch (currentPlayer) {

                case 0: currentPlayer = 1; break;
                case 1: currentPlayer = 0;
            }
        }
    };
}
export default performAction;