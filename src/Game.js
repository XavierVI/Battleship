import {zeros} from 'mathjs';

class Game{
    constructor(){
        
    }
}

function player(){

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

export {Game, player, getCoords}