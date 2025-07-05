
class Player {

    constructor (boardSize, hitTarget, huntMode) {

        this.board = boardSize;
        this.target = hitTarget;
        this.queue = huntMode;
    }

    human() {

        const index = this.target.dataset.id;

        const x = index % this.board;
        const y = Math.floor(index / this.board);

        return {x, y};
    }

    computer(fleet) {

        let coords; // current

        if (this.queue.length) {
            coords = this.queue.shift();
        }
        else {
            const length = this.target.length;
            const index = Math.floor(Math.random() * length);

            const [x, y] = this.target[index];
            coords = {x, y};

            this.target[index] = this.target[length - 1];
            this.target.pop();
        }

        if (fleet.has(`${coords.x}, ${coords.y}`)) {
            // successful strike
            this.enclose(coords);
        }
        return coords;
    }

    enclose(coords) {

        const directions = [
            // straight       // diagonal
            {dx: 0, dy: 1},   {dx: 1, dy: 1},
            {dx: 1, dy: 0},   {dx: 1, dy: -1},
            {dx: 0, dy: -1},  {dx: -1, dy: -1},
            {dx: -1, dy: 0},  {dx: -1, dy: 1},
        ];

        for (const {dx, dy} of directions) {

            const newX = coords.x + dx, newY = coords.y + dy;

            if (!(newX >= 0 && newX < this.board && 
                newY >= 0 && newY < this.board)) continue;

            const index = this.target.findIndex(([x, y]) => {
                return x === newX && y === newY;
            });
            if (index < 0) continue;
            // get only non-diagonal
            if (dx === 0 || dy === 0) {
                this.queue.push({x: newX, y: newY});
            }
            this.target.splice(index, 1);
        }
    }
}
export default Player;