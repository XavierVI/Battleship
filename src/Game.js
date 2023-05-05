import {e, zeros} from 'mathjs';

class Game{
    constructor(){
        this.gameBoard = document.getElementById('game-board');
        this.playerShips = getShipCoords();
        this.aiShips = getShipCoords();
        this.playerGrid = this.createGrid(this.playerShips, 'player');
        this.aiGrid = this.createGrid(this.aiShips, 'ai');
    }
    // creates a grid for the players ships
    createGrid(playerShips, playerId){
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                const cell = document.createElement('div');
                cell.className = 'cell';
                const button = document.createElement('button');
                // Id allows identification of coordinate that was hit and which player
                button.id = `${i},${j},${playerId}`;

                if(contains(playerShips, [i, j])) button.addEventListener('click', this.shipHitListener);
                else button.addEventListener('click', this.blankSpotListener);
            }
        }
    }

    shipHitListener(e){
        const id = e.target.id;
        const x = parseInt(id.split()[0]);
        const y = parseInt(id.split()[1]);
        const index = 10*x + y;
 
        if(id === 'player') this.playerShips.splice(index, 1);
        else this.aiShips.splice(index, 1);
    }

    blankSpotListener(e){
        
    }
}

/* 
    Carrier: 5
    Battleship: 4
    Crusier: 3
    Submarine: 3
    Destroyer: 2
*/
function getShipCoords(){
    let shipCoords = [];
    let takenCoords = [];

    for(let i = 5; i > 1; i--){
        if(i === 3){
            const coords1 = getCoords(i, takenCoords);
            coords1.map(coord => {
                takenCoords.push(coord);
                shipCoords.push(coord);
            });
            const coords2 = getCoords(i, takenCoords);
            coords2.map(coord => {
                takenCoords.push(coord);
                shipCoords.push(coord);
            });
            continue;
        }
        const coords = getCoords(i, takenCoords);
        coords.map(coord => {
            takenCoords.push(coord);
            shipCoords.push(coord);
        });
    }
    return shipCoords;
}

// handles establishing the starting point of a ship
// returns coordinate as an array [x, y]
function getCoords(shipSize, takenCoords){
    // 50% chance of horizontal and vertical orientation
    const horizontal = Math.floor(Math.random*2);
    let shipCoord = [];
    let startingCoord;

    do{
        // generate new coordinate until while loop condition fails
        const x = Math.floor(Math.random()*shipSize);
        const y = Math.floor(Math.random()*shipSize);
        startingCoord = [x, y];

        // check if current starting location is available and orientation is horizontal
        if(!contains(takenCoords, startingCoord) && horizontal){
            shipCoord.push(startingCoord);
            // loop through each neighbor cell to check availablity
            for(let i = 1; i < shipSize; i++){
                if(!contains(takenCoords, [x+i, y])) shipCoord.push([x+i, y]);
                // if neighbor cell is taken, start over
                else{
                    // reset shipCoord because this coord does not work
                    shipCoord = [];
                    break;
                }
            }
        }
        // same condition, this block is for vertical orientations
        else if(!contains(takenCoords, startingCoord)){
            shipCoord.push(startingCoord);
            // loop through each neighbor cell to check availablity
            for(let i = 1; i < shipSize; i++){
                if(!contains(takenCoords, [x, y+i])) shipCoord.push([x, y+i]);
                // if neighbor cell is taken, start over
                else{
                    // reset shipCoord because this coord does not work
                    shipCoord = [];
                    break;
                }
            }
        }
    } while(shipCoord.length === 0)
    // loop ends when shipCoord length is not zero
    return shipCoord;
}

function contains(arr, coord){
    for(let i = 0; i < arr.length; i++){
        // convert array values to strings for simple comparison
        if(arr[i].toString() === coord.toString()) return true;
    }
    return false;
}

export {Game, getShipCoords, getCoords}