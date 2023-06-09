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

function createScore(board, playerName){
    board.textContent = `${playerName} health: 17`;
}

function displayWinMessage(playerName){
    // creates a message in front of page notifying who has won
}

function removeGrid(){
    // removes all grids from the board
    const children = board.childNodes;
    children.map(child => {
        board.removeChild(child);
    });
}

function onHit(cell, location){
    // listener for when a ship was struck
    // changes how cell looks
    cell.removeChild(cell.childNodes[0]);
    cell.style.backgroundColor = 'red';
}

function noHit(cell, location){
    // listener for when a ship was not struck
    // changes how cell looks
    cell.removeChild(cell.childNodes[0]);
    cell.style.backgroundColor = '#636261';
}

function modifyScore(board, playerName){
    let health = parseInt(board.textContent.slice(-2));
    health = health - 1;
    board.textContent = `${playerName} health ${health}`;
}

function modifyTurn(element, playerName){
    element.textContent = (playerName === 'Your') ? `${playerName} turn`
                                                    : `${playerName}'s turn`;
}

export { createGrid, createScore, removeGrid, onHit, noHit, modifyScore, modifyTurn }