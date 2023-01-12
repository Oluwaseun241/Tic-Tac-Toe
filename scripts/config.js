function openPlayerConfig() {
	playerOverlayElement.style.display = 'block';
	backdropElement.style.display = 'block';
}

function closePlayerConfig() {
	playerOverlayElement.style.display = 'none';
	backdropElement.style.display = 'none';
	formElement.firstElementChild.classList.remove('error');
	errorsElement.textContent = '';
}

function setPlayerConfig(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const enteredPlayername = formData.get('playername').trim();

	// validation
	if (!enteredPlayername) {
		event.target.firstElementChild.classList.add('error');
		errorsElement.textContent = 'Please enter a valid name';
		return;
	}
}
