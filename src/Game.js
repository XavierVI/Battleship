import { getShipCoords } from "./lib/coordinates";

export default class Game{
    constructor(){
        this.playerShips = getShipCoords();
        this.aiShips = getShipCoords();
        // Life will decrease everytime a ship is hit, player is dead once it reaches zero
        this.playerLife = 17;
        this.aiLife = 17;
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