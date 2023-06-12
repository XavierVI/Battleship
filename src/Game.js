import { getShipCoords } from "./lib/coordinates";
import AI from './lib/ai';
const ai = new AI();

export default class Game{
    constructor(){
        this.playerShips = getShipCoords();
        this.aiShips = getShipCoords();
        // Life will decrease everytime a ship is hit, player is dead once it reaches zero
        this.playerLife = 17;
        this.aiLife = 17;
        this.turn = 'player';
        // false while no one has won
        this.gameEnded = false;
    }

    runGame(){
        while(!gameEnded){
            if(turn == 'player'){
    
            }
            // ai turn
            else{
                coord = ai.getCoord();
                
            }
        }
    }

    attackPlayer(coord){

    }

    attackAI(coord){

    }

    decreasePlayerLife(){
        this.playerLife--;
    }

    decreaseAiLife(){
        this.aiLife--;
    }

    gameCheck(){
        // checks game status to see if a player has won

    }
}