import Ship from "./ships.js";
import Action, { nextHit as queue } from "./player.js";

let player, flagships;

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
                    d += size;
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
            if (!enemy.size) alert('Game over');
        },

        sinkShips: (target) => {

            for (const ship of flagships) {

                if (!ship.has(target)) continue;
                ship.delete(target);
            }
            if (flagships[0].size) return; // not sunk yet

            queue.length = 0; // clear attack queue
            flagships = flagships.filter(ship => ship.size > 0);

            /* ToDo: still have to find a way to emulate human behavior
            when ships of equal sizes are destroyed in an order different
            than creation order. In such scenario the computer continues
            to hit adjacent targets while a human would not do that */
        },

        restartGame: () => {

            for (const data of [armadas, targets, queue]) {
                data.length = 0;
            }
            for (let i = 0; i < area**2; i++) {
                targets.push([Math.floor(i / area), i % area]);
            } // re-map auto targets
        },
    };
}
export default performAction;