import { contains } from "./lib/coordinates";

export default class GameBoard{
    constructor(playerShips, aiShips, onHitListener, noHitListener){
        this.board = document.getElementById('game-board');
        this.playerScore = document.getElementById('player-score');
        this.aiScore = document.getElementById('ai-score');
        this.mssg = document.getElementById('info');
        
        this.createPlayerGrid(playerShips, 'player', onHitListener, noHitListener);
        this.createAiGrid(aiShips, 'ai', onHitListener, noHitListener);
        
        this.createScore('player');
        this.createScore('AI');
        this.modifyTurn('player');
    }

    createAiGrid(shipCoords, playerName, onHitListener, noHitListener){
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
        this.board.appendChild(grid);
    }

    createPlayerGrid(shipCoords, playerName, onHitListener, noHitListener){
        const grid = document.createElement('table');
        grid.id = 'player-grid';
        for(let i = 0; i < 10; i++){
            const row = document.createElement('tr');
            for(let j = 0; j < 10; j++){
                const cell = document.createElement('td');
                const button = document.createElement('button');
                // create an id which contains the name of the player
                button.id = `${i}${j}`;
                button.className = playerName;
                button.disabled = true;
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
        this.board.appendChild(grid);
    }

    createScore(playerName){
        if(playerName == 'player') this.playerScore.textContent = `${playerName} health: 17`;
        else this.aiScore.textContent = `${playerName} health: 17`;
    }

    onHit(cell){
        // listener for when a ship was struck
        // changes how cell looks
        cell.removeChild(cell.childNodes[0]);
        cell.style.backgroundColor = 'red';
    }

    noHit(cell){
        // listener for when a ship was not struck
        // changes how cell looks
        cell.removeChild(cell.childNodes[0]);
        cell.style.backgroundColor = '#636261';
    }

    modifyScore(playerName){
        const scoreCard = (playerName == 'player') ? this.playerScore : this.aiScore;
        let health = parseInt(scoreCard.textContent.slice(-2));
        health = health - 1;
        scoreCard.textContent = `${playerName} health ${health}`;
    }

    modifyTurn(playerName){
        this.mssg.textContent = (playerName === 'player') ? `${'Your'} turn`
                                                        : `${playerName}'s turn`;
    }

    displayWinMessage(playerName){
        // creates a message in front of page notifying who has won
    }

    removeGrid(){
        // removes all grids from the board
        const children = board.childNodes;
        children.map(child => {
            board.removeChild(child);
        });
    }

    /**
     * This will trigger the event listener for a specified cell
     * in the player's grid.
     * @param {*} coord Used to specifiy the cell to trigger
     */
    triggerEvent(coord){
        // table (grid) => tr[coord[0]] => td[coord[1]] => button (td[0])
        const triggerCell = document.getElementById('player-grid')
                            .childNodes[coord[0]].childNodes[coord[1]]
                            .childNodes[0];
        console.log(coord);
        console.log(triggerCell);
        triggerCell.dispatchEvent(new Event('click'));
    }
}