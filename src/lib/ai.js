import { getCoord } from "./coordinates";

export default class AI{
    constructor(){
        this.#attempedCoords = [];
    }

    getCoord(){
        const coord = getCoord(this.#attempedCoords);
        return coord;
    }

    addAttempt(coord){
        this.#attempedCoords.push(coord);
    }
}