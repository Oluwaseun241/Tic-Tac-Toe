function openPlayerConfig() {
	playerOverlayElement.style.display = 'block';
	backdropElement.style.display = 'block';
}

function closePlayerConfig() {
	playerOverlayElement.style.display = 'none';
	backdropElement.style.display = 'none';
}

function setPlayerConfig(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const enteredPlayername = formData.get('playername');
	console.log(enteredPlayername);
}
