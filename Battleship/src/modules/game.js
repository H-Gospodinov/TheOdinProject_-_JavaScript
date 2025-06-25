import Ship from "./ships.js";
import Player from "./player.js";

let currentPlayer, humanFleet, computerFleet;

// PERFORM ACTION

function performAction(area) {

    return {

        createShips() {

            const ships = []; // predefined lengths
            const lengths = [4, 3, 3, 2, 2, 1, 1, 1];
            const fleet = new Set(); // reserved space

            for (let shipSize of lengths) {

                ships.push(new Ship(area, shipSize).create(fleet));
            }
            if (humanFleet) computerFleet = ships;
            else humanFleet = ships;

            return ships;
        },

        selectPlayer() { // random start

            currentPlayer = Math.random() < 0.5 ? 0 : 1;
            // 0 = human, 1 = computer
            return currentPlayer;
        },

        performAttack(target) {

            const now = target ? 'human' : 'computer';

            return new Promise((resolve) => {

                const action = Player(area).attack(target, now);
                resolve(action);
                this.switchPlayer();
            });
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