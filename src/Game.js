import { getShipCoords } from "./lib/coordinates";
import GameBoard from './GameBoard';
import AI from './lib/ai';

export default class Game{
    // should be equivalent to startGame()
    constructor(){
        this.playerShips = getShipCoords();
        this.aiShips = getShipCoords();
        this.ai = new AI();
        // Life will decrease everytime a ship is hit, player is dead once it reaches zero
        this.playerLife = 17;
        this.aiLife = 17;
        this.turn = 'player';
        // false while no one has won
        this.gameEnded = false;
        this.gb = new GameBoard(this.playerShips, this.aiShips,
                                this.onHitListener, this.noHitListener);
    }

    attackPlayer(){
        const coord = this.ai.getCoord();
        this.ai.addAttempt(coord);
        this.gb.triggerEvent(coord);
    }

    switchTurns(){
        if(this.turn == 'player'){
            this.turn = 'AI';
            this.attackPlayer();
        }
        else this.turn = 'player';
    }

    onHitListener = (e) => {
        // checks which player was hit by checking button's id or classname then calling the approriate functions
        // calls onHit and game.shipHit(playername)
        const playerHit = e.target.className;
        const cell = e.target.parentNode;
        const x = parseInt(e.target.id.charAt(0));
        const y = parseInt(e.target.id.charAt(1));
        const position = [x, y];
        if (playerHit === 'player') {
            this.decreasePlayerLife();
            this.gb.onHit(cell, position);
            this.gb.modifyScore('player');
            this.gb.modifyTurn('AI');
        }
        else {
            this.decreaseAiLife();
            this.gb.onHit(cell, position);
            this.gb.modifyScore('AI');
            this.gb.modifyTurn('Your');
        }
        if(this.gameCheck()){} // endGame
        else this.switchTurns();
    }

    noHitListener = (e) => {
        const playerHit = e.target.className;
        const cell = e.target.parentNode;
        const x = parseInt(e.target.id.charAt(0));
        const y = parseInt(e.target.id.charAt(1));
        const position = [x, y];
        if (playerHit === 'player') {
            this.gb.noHit(cell);
            this.gb.modifyTurn('player');
        }
        else {
            this.gb.noHit(cell);
            this.gb.modifyTurn('AI');
        }
        if(this.gameCheck()){} // endGame
        else this.switchTurns();
    }

    decreasePlayerLife(){
        this.playerLife--;
    }

    decreaseAiLife(){
        this.aiLife--;
    }

    gameCheck(){
        // checks game status to see if a player has won
        return false;
    }
}