import Game from './Game';
import { createGrid, removeGrid, onHit, noHit } from './GameBoard';

// have access to variables and methods
const game = new Game();

function runGame(){
    // runs game
    // const playerGrid = createGrid();
}

function somethigHit(e){
    // checks which player was hit by checking button's id or classname then calling the approriate functions
    // calls onHit and game.shipHit(playername)
}

function somethingWasntHit(e){

}