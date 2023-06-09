import Game from './Game';
import { createGrid, createScore, removeGrid, onHit, noHit, modifyScore, modifyTurn } from './GameBoard';
import './styles/main.css';
import './styles/board.css';


const board = document.getElementById('game-board');
const playerScore = document.getElementById('player-score');
const aiScore = document.getElementById('ai-score');
const turn = document.getElementById('info');
// not const because they will change between games
let playerGrid;
let aiGrid;

const game = new Game();


function runGame() {
    console.log(game);
    // runs game
    playerGrid = createGrid(game.playerShips, 'player', onHitListener, noHitListener);
    board.appendChild(playerGrid);
    aiGrid = createGrid(game.aiShips, 'ai', onHitListener, noHitListener);
    board.appendChild(aiGrid);
    createScore(playerScore, 'Your');
    createScore(aiScore, 'AI');
    modifyTurn(turn, 'Your');
}

function onHitListener(e) {
    // checks which player was hit by checking button's id or classname then calling the approriate functions
    // calls onHit and game.shipHit(playername)
    const playerHit = e.target.className;
    const cell = e.target.parentNode;
    const x = parseInt(e.target.id.charAt(0));
    const y = parseInt(e.target.id.charAt(1));
    const position = [x, y];
    if (playerHit === 'player') {
        game.decreasePlayerLife();
        if(game.aiLife === 0){
            
        }
        else{
            onHit(cell, position);
            modifyScore(playerScore, 'player');
            modifyTurn(turn, 'AI');
        }
    }
    else {
        game.decreaseAiLife();
        onHit(cell, position);
        modifyScore(aiScore, 'AI');
        modifyTurn(turn, 'Your');
    }
}

function noHitListener(e) {
    const playerHit = e.target.className;
    const cell = e.target.parentNode;
    const x = parseInt(e.target.id.charAt(0));
    const y = parseInt(e.target.id.charAt(1));
    const position = [x, y];
    if (playerHit === 'player') {
        noHit(cell, position);
        modifyTurn(turn, 'AI');
    }
    else {
        game.decreaseAiLife();
        noHit(cell, position);
        modifyTurn(turn, 'Your');
    }
}

runGame();