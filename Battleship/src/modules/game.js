import Ship from "./ships.js";
import Player from "./player.js";

let currentPlayer;
let currentFleet = [];

// PERFORM ACTION

function performAction(area) {

    return { // factory

        createShips: () => {

            const fleet = new Set();
            const sizes = [4, 3, 3, 2, 2, 1, 1, 1];

            for (let size of sizes) {

                new Ship(area, size).create(fleet);
            }
            currentFleet.push(fleet);
            return fleet;
        },

        selectPlayer: () => { // random start

            currentPlayer = Math.random() < 0.5 ? 0 : 1;
            return currentPlayer;
        },

        performAttack(target) { // no arrow

            const now = currentPlayer;
            const action = Player(area).attack(target, now);

            this.takeDamage(action, now);
            this.switchPlayer(); return action;
        },

        takeDamage: (action, now) => {

            const target = `${action.x}, ${action.y}`;
            const enemy = now ? currentFleet[0] : currentFleet[1];

            enemy.has(target) ? enemy.delete(target) : null;
            if (!enemy.size) alert('Game over');
        },

        switchPlayer: () => {

            switch (currentPlayer) {

                case 0: currentPlayer = 1; break;
                case 1: currentPlayer = 0;
            }
        } // 0 = human player, 1 = computer
    };
}
export default performAction;