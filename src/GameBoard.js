import { contains } from "./lib/coordinates";

function createGrid(shipCoords, playerName, onHitListener, noHitListener){
    // creates a grid and appends it to the board
    // meant to be called more than once
    // checks if a button is in the same location as a ship coord
    const grid = document.createElement('table');
    for(let i = 0; i < 10; i++){
        const row = document.createElement('tr');
        for(let j = 0; j < 10; j++){
            const cell = document.createElement('td');
            const button = document.createElement('button');
            // create an id which contains the name of the player
            button.id = `${i}${j}`;
            button.className = playerName;
            if(contains(shipCoords, [i, j])){
                button.addEventListener('click', onHitListener);
            }
            else{
                button.addEventListener('click', noHitListener);
            }
            cell.appendChild(button);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    return grid;
}

function removeGrid(){
    // removes all grids from the board
    const children = board.childNodes;
    children.map(child => {
        board.removeChild(child);
    });
}

function onHit(grid, location){
    // listener for when a ship was struck
    // changes how cell looks
}

function noHit(grid, location){
    // listener for when a ship was not struck
    // changes how cell looks
}



export { createGrid, removeGrid, onHit, noHit }