let editedPlayer = 0;

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

// Button section
const editPlayer1Element = document.getElementById('edit-player1');
const editPlayer2Element = document.getElementById('edit-player2');
const cancelConfigElement = document.getElementById('cancel-config');
const startNewGameElement = document.getElementById('start-game-btn');

// Click section
editPlayer1Element.addEventListener('click', openPlayerConfig);
editPlayer2Element.addEventListener('click', openPlayerConfig);

cancelConfigElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', setPlayerConfig);

startNewGameElement.addEventListener('click', startNewGame);
