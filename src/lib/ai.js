import { getCoord } from "./coordinates";

export default class AI{
    constructor(){
        this.attempedCoords = [];
    }

    /**
     * Returns a random coordinate representing where the AI will
     * attack the player.
     * @returns The coordinate where the player will be attacked.
     */
    getCoord(){
        const coord = getCoord(this.attempedCoords);
        return coord;
    }

    /**
     * Adds an attempted coordinate to an array to prevent AI from chosing
     * the same coordinates.
     * @param {*} coord coordinate to add to array.
     */
    addAttempt(coord){
        this.attempedCoords.push(coord);
    }
}