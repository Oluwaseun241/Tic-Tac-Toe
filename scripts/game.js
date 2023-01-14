function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        startGameErrorElement.textContent = 'Please set custom player names for both players';
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
    startGameErrorElement.textContent = '';
}

function switchPlayer() {
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col -1;
    const selectedRow = selectedField.dataset.row -1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        startGameErrorElement.textContent = 'This field is already selected';
        return;
    }
    startGameErrorElement.textContent = '';

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);

    switchPlayer();
}