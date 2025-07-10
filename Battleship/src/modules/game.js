import Ship from "./ships.js";
import Action, { nextHit as queue } from "./player.js";

let player, flagships, flag;

const armadas = [], targets = [];

// PERFORM ACTION

function performAction(area) {

    for (let i = 0; i < area**2; i++) {
        // map auto targets
        targets.push([Math.floor(i / area), i % area]);
    }

    return { // factory

        createShips: () => {

            const fleet = new Set();
            const sizes = [4, 3, 3, 2, 2, 1, 1, 1];

            for (let size of sizes) {

                new Ship(area, size).create(fleet);
            }
            armadas.push(fleet);

            if (armadas.length === 1) {

                let d = 0; flagships = [];

                for (const size of sizes) {

                    flagships.push(new Set([...fleet].slice(d, d + size)));
                    d += size; // delta
                } // allocate ships
            }
            return fleet;
        },

        selectPlayer: (initial) => {

            if (initial) { // random first

                // 1 = human, 0 = computer
                return player = Math.random() < 0.5 ? 0 : 1;
            }
            player ? player = 0 : player = 1;
        },

        performAttack(target) {

            const action = player ?

                Action(area, target).human() :
                // seek and destroy
                Action(area, targets).computer(armadas[0]);

            this.takeDamage(action, player);
            this.selectPlayer();

            return action;
        },

        takeDamage(action, player) {

            const target = `${action.x}, ${action.y}`;
            const enemy = player ? armadas[1] : armadas[0];

            if (enemy.has(target)) {

                player ? null : this.sinkShips(target);
                enemy.delete(target);
            }
            if (enemy.size) return;

            const gameOver = new CustomEvent('GameOver');
            // signal to lock the board
            document.dispatchEvent(gameOver);
        },

        sinkShips: (target) => { // clear attack queue

            for (const ship of flagships) {

                if (!ship.has(target)) continue;

                if (ship === flagships.at(-1) && ship.has(target) &&
                    flagships.every(ship => ship.size <= 1)) {
                    // three flagships (3 x 1)
                    queue.length = 0;
                }
                ship.delete(target);
            }
            if (!flagships[0].size) { // one flagship

                queue.length = 0;
                flagships = flagships.filter(ship => ship.size > 0);

                if (flagships.length < 2) flag = false;

                else flag = flagships[1].size == flagships[0].size;
                // flag's true if more than one flagship
            }
            else if (flag && !flagships[1].size) { // two flagships

                queue.length = 0;
                flagships.splice(1, 1); flag = false;
            }
            /* a flagship is the current biggest ship (one or more). when a flagship
            is sunk the computer stops striking adjacent targets and reverts to random.
            the function follows the current ship config (1x4, 2x3, 2x2, 3x1) */
        },

        restartGame: () => {

            for (const data of [armadas, targets, queue]) {
                data.length = 0;
            } flag = false; // reset globals

            for (let i = 0; i < area**2; i++) {
                targets.push([Math.floor(i / area), i % area]);
            } // re-map auto targets
        },
    };
}
export default performAction;