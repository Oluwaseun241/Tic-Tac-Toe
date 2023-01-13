function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        startGameErrorElement.textContent = 'Please set custom player names for both players';
        return;
    }
    gameAreaElement.style.display = 'block';
    startGameErrorElement.textContent = '';
}