import Game from './Game';
import { createGrid, removeGrid, onHit, noHit } from './GameBoard';

// have access to variables and methods
const game = new Game();
const board = document.getElementById('game-board');
// not const because they will change between games
let playerGrid;
let aiGrid;

function runGame() {
    console.log(game);
    // runs game
    playerGrid = createGrid(game.playerShips, 'player', onHitListener, noHitListener);
    board.appendChild(playerGrid);
    aiGrid = createGrid(game.aiShips, 'ai', onHitListener, noHitListener);
    board.appendChild(aiGrid);
}

function onHitListener(e) {
    // checks which player was hit by checking button's id or classname then calling the approriate functions
    // calls onHit and game.shipHit(playername)
    const playerHit = e.target.className;
    const x = parseInt(e.target.id.charAt(0));
    const y = parseInt(e.target.id.charAt(1));
    const position = [x, y];
    if (playerHit === 'player') {
        game.decreasePlayerLife();
        onHit(playerGrid, position);
    }
    else {
        game.decreaseAiLife();
        onHit(aiGrid, position);
    }
}

function noHitListener(e) {
    const playerHit = e.target.className;
    const x = parseInt(e.target.id.charAt(0));
    const y = parseInt(e.target.id.charAt(1));
    const position = [x, y];
    if (playerHit === 'player') {
        noHit(playerGrid, position);
    }
    else {
        game.decreaseAiLife();
        noHit(aiGrid, position);
    }
}

runGame();