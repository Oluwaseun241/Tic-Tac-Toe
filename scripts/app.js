const playerOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

const editPlayer1Element = document.getElementById('edit-player1');
const editPlayer2Element = document.getElementById('edit-player2');

editPlayer1Element.addEventListener('click', openPlayerConfig);
editPlayer2Element.addEventListener('click', openPlayerConfig);
