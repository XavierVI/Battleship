import { getShipCoords } from "./lib/coordinates";

export default class Game{
    constructor(){
        this.playerShips = getShipCoords();
        this.aiShips = getShipCoords();
        // Life will decrease everytime a ship is hit, player is dead once it reaches zero
        this.playerLife = 17;
        this.aiLife = 17;
    }

    shipHitListener(playerName){
        // reduces the ship of the player that was hit
        if(playerName === 'player') this.playerLife--;
        else this.aiLife--;
    }

    gameCheck(){
        // checks game status to see if a player has won

    }
}