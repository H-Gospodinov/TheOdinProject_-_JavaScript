
let previousHit, nextHit = [];

class Player {

    constructor (boardSize, hitTarget) {

        this.board = boardSize;
        this.target = hitTarget;
    }

    human() {

        const index = this.target.dataset.id;

        const x = index % this.board;
        const y = Math.floor(index / this.board);

        return {x, y};
    }

    computer(fleet) {

        let coords; // current

        if (nextHit.length) {
            coords = nextHit.shift();
        }
        else {
            const length = this.target.length;
            const index = Math.floor(Math.random() * length);

            const [x, y] = this.target[index];
            coords = {x, y}; // strike

            this.target[index] = this.target[length - 1];
            this.target.pop();
            previousHit = null;
        }

        if (fleet.has(`${coords.x}, ${coords.y}`)) {
            // successful strike
            this.enclose(coords);
        }
        return coords;
    }

    enclose({x, y}) {

        const directions = [
            // straight      // diagonal
            {dx: 0, dy: -1}, {dx: 1, dy: -1}, // top, top-right
            {dx: 1, dy: 0},  {dx: 1, dy: 1},  // right, bottom-right
            {dx: 0, dy: 1},  {dx: -1, dy: 1}, // bottom, bottom-left
            {dx: -1, dy: 0}, {dx: -1, dy: -1} // left, top-left
        ];

        for (const {dx, dy} of directions) {

            const newX = x + dx, newY = y + dy;

            if (newX < 0 || newX >= this.board || 
                newY < 0 || newY >= this.board) continue;

            const index = this.target.findIndex(([x, y]) => {
                return x === newX && y === newY;
            });
            if (index < 0) continue;

            // add non-diagonal to attack queue
            if (dx === 0 || dy === 0) {
                nextHit.push({x: newX, y: newY});
            }
            // remove all from target pool
            this.target.splice(index, 1);
        }

        const filter = this.orientation({x, y});
        // filter if orientation is known
        if (filter !== 'H' && filter !== 'V') return;

        nextHit = nextHit.filter(item => 
            (filter === 'H' && item.y === y) || 
            (filter === 'V' && item.x === x)
        );
    }

    orientation({x, y}) {

        if (!previousHit) {
            previousHit = {x, y}; return;
        }
        const horizontal = y === previousHit.y;
        const vertical = x === previousHit.x;

        return horizontal ? 'H' : vertical ? 'V' : 0;
    }
}
export default Player;