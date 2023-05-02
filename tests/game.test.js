import {Game} from '../src/Game.js';
import {typeOf, zeros} from 'mathjs';

const gameBoard = document.getElementById('game-board');
const game = new Game();
const player = player();

describe('Testing generated ships for players', () => {
    test('getCoords test', () => {
        // getCoords returns appropriate bounds for a ship
        expect(   getCoords(5) < 6
               && getCoords(4) < 7
               && getCoords(3) < 8
               && getCoords(2) < 9  )
                .toBe(true);
    });
    // player contains all ships
    test('ship population', () => {
        expect(   player.carrier
               && player.battleship
               && player.crusier
               && player.submarine
               && player.destroyer  )
                .toBe(true);
    });
});


describe('DOM element tests', () => {
    test('Game board is in page', () => {
        // only test if children are added to DOM
        expect(gameBoard.childNodes).toBeDefined();
    });

    test('Action listeners test', () => {
        addShipListener(player);
        expect(gameBoard.childNodes)
    });
});