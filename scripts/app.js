const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

// Non-Button section
const playerOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsElement = document.getElementById('config-errors');
const startGameErrorElement = document.getElementById('start-game-error');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

// Button section
const editPlayer1Element = document.getElementById('edit-player1');
const editPlayer2Element = document.getElementById('edit-player2');
const cancelConfigElement = document.getElementById('cancel-config');
const startNewGameElement = document.getElementById('start-game-btn');
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

// Click section (event listner)
editPlayer1Element.addEventListener('click', openPlayerConfig);
editPlayer2Element.addEventListener('click', openPlayerConfig);

cancelConfigElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', setPlayerConfig);

startNewGameElement.addEventListener('click', startNewGame);


// Logic messed up
// for (const gameFieldElement of gameFieldElements) {
//     gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField)