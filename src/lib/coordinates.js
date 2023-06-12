// /* 
//     Carrier: 5
//     Battleship: 4
//     Crusier: 3
//     Submarine: 3
//     Destroyer: 2
// */
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
        }
        else{
            const coords = getCoords(i, takenCoords);
            coords.map(coord => {
                takenCoords.push(coord);
                shipCoords.push(coord);
            });
        }
    }
    return shipCoords;
}

// // handles establishing the starting point of a ship
// // returns coordinate as an array [x, y]
function getCoords(shipSize, takenCoords){
//     // 50% chance of horizontal and vertical orientation
    const horizontal = Math.floor(Math.random*2);
    let shipCoord = [];
    let startingCoord;

    do{
        // generate new coordinate until while loop condition fails
        // 10 - shipSize gets possible initial positions, preventing ships from going over board
        const x = Math.floor(Math.random()*(10 - shipSize));
        const y = Math.floor(Math.random()*(10 - shipSize));
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
                }
            }
        }
    } while(shipCoord.length === 0)
    // loop ends when shipCoord length is not zero
    return shipCoord;
}

/**
 * A function which returns a coordinate; if takenCoords is not null,
 * returns a coordinate that is not inside of it.
 * @param {Array} takenCoords An array of coordinates already taken
 * @returns A coordinate
 */
function getCoord(takenCoords){
    let coord = [];
    do{
        // generate new coordinate until while loop condition fails
        const x = Math.floor(Math.random()*10);
        const y = Math.floor(Math.random()*10);
        coord = [x, y];
    } while(contains(takenCoords, coord))
    return coord;
}

/**
 * Tests if an array of coordinates contains a specific coordinate
 * @param {Array} arr The array of coordinates to search
 * @param {Array} coord The target coordinate
 * @returns True if arr contains coord, false otherwise
 */
function contains(arr, coord){
    if(arr.length === 0) return false;
    for(let i = 0; i < arr.length; i++){
        // convert array values to strings for simple comparison
        if(arr[i].toString() === coord.toString()) return true;
    }
    return false;
}

export { contains, getShipCoords, getCoords, getCoord }
