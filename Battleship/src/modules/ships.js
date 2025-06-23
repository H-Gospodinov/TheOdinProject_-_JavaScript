
class Ship {

    constructor (boardSize, shipLength) {

        this.board = boardSize;
        this.ship = shipLength;
    }

    position() {

        let x, y; // starting point
        const orientation = Math.random() < 0.5 ? 0 : 1;

        do { // randomize within bounds
            x = Math.floor(Math.random() * this.board);
            y = Math.floor(Math.random() * this.board);
        }
        while ((orientation === 0 && x + this.ship > this.board) || 
                 (orientation === 1 && y + this.ship > this.board));
    
        return {x, y, orientation};
    }

    create(fleet) {

        let position; let occupied;

        do { // run once, then repeat if occupied
            position = []; occupied = false;

            const { x, y, orientation } = this.position(); // random

            for (let i = 0; i < this.ship; i++) {

                const coords = !orientation ? { x: x + i, y: y } : { x: x, y: y + i };

                if (fleet.has(`${coords.x}, ${coords.y}`) || this.enclose(coords, fleet)) {
                    // unavailable, try another
                    occupied = true; break;
                }
                position.push(coords);
            }
            if (occupied) continue; // already unavailable
            
            for (const segment of position) {
                fleet.add(`${segment.x}, ${segment.y}`);
                this.enclose(segment, fleet);
            }
        } while (occupied);

        return position;
    }

    enclose(pos, fleet) { // disable adjacent positions

        const adjacentPositions = [
            { x: pos.x - 1, y: pos.y - 1 },
            { x: pos.x - 1, y: pos.y },
            { x: pos.x - 1, y: pos.y + 1 },
            { x: pos.x, y: pos.y - 1 },
            { x: pos.x, y: pos.y + 1 },
            { x: pos.x + 1, y: pos.y - 1 },
            { x: pos.x + 1, y: pos.y },
            { x: pos.x + 1, y: pos.y + 1 }
        ];
        return adjacentPositions.some(coords => {
            return fleet.has(`${coords.x}, ${coords.y}`);
        });
    }
}
export default Ship;