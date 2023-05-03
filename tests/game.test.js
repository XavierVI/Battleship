import {Game, player, getCoords} from '../src/Game.js';
import {typeOf, zeros} from 'mathjs';

// const gameBoard = document.getElementById('game-board');
const game = new Game();
const playerTest = player();

describe('Generating player ships and coords', () => {
    test('getCoords array size', () => {
        const c1 = getCoords(2, []);
        const c2 = getCoords(3, []);
        const c3 = getCoords(4, []);
        const c4 = getCoords(5, []);
        // expect getCoords to return an array with correct size
        expect( c1.length === 2 
             && c2.length === 3 
             && c3.length === 4 
             && c4.length === 5)
             .toBe(true);
    });

    test('getCoords returning available coordinates', () => {
        const arr = [[1, 4], [6, 6], [7, 8], [1, 1], [4, 8]];
        const size = 4;
        const coords = getCoords(size, arr);
        // coords should not have values from arr
        expect(arr).not.toContain(coords);
    });
});

describe('player function', () => {
    // player contains all ships
    test('ship population and sizes', () => {
        expect(   playerTest.carrier
               && playerTest.battleship
               && playerTest.crusier
               && playerTest.submarine
               && playerTest.destroyer  )
                .toBe(true);
    });
});


describe('DOM element tests', () => {
    test('Game board is in page', () => {
        // only test if children are added to DOM
        expect(gameBoard.childNodes).toBeDefined();
    });

    test('Action listeners test', () => {
        addShipListener(playerTest);
        expect(gameBoard.childNodes)
    });
});