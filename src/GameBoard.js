import { contains } from "./lib/coordinates";
const board = document.getElementById('game-board');

function createGrid(shipCoords, playerName, listener){
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
                button.addEventListener('click', listener);
            }
            else{
                button.addEventListener('click', noHit);
            }
            cell.appendChild(button);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function removeGrid(){
    // removes all grids from the board
    const children = board.childNodes;
    children.map(child => {
        board.removeChild(child);
    });
}

function onHit(location){
    // listener for when a ship was struck
    // changes how cell looks
}

function noHit(location){
    // listener for when a ship was not struck
    // changes how cell looks
}



export { createGrid, removeGrid, onHit, noHit }