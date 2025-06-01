let limit = 10;
let current = 0;

let limitInputElement;
let currentValueElement;

function accumulate() {
	const page = document.getElementById('page');
	if (current + 1 > limit) return;
	current += 1;
	_updateCurrentDisplay();
	_updateBackground();
}

function toggleCategory() {

}

function updateLimit() {
	const newLimit = Number(limitInputElement.value);
	if (newLimit != limit) {
		limit = newLimit;
		_resetAccumulator();
	}
}

function _resetAccumulator() {
		current = 0;
		_updateCurrentDisplay();
		_updateBackground();
}

function _updateBackground() {
	const percentage = (current/limit) * 100 + "%";
	const gradient = 'linear-gradient(to top, lightblue, lightblue ' + percentage + ', transparent ' + percentage + ', transparent)';
    page.style.backgroundImage = gradient;
}

function _updateCurrentDisplay() {
	currentValueElement.textContent = current.toString();
}

document.addEventListener("DOMContentLoaded", function () {
	// Initialize values.
	limitInputElement = document.getElementById('limit-input');
	limitInputElement.value = limit.toString();

	currentValueElement = document.getElementById('current');
	currentValueElement.textContent = current.toString();

	historyButtonElement = document.getElementById('history');
	historyButtonElement.addEventListener('dblclick', (e) => {
		console.log('undo')
		if (historyButtonElement.classList.contains('historyUndo')) {
			historyButtonElement.classList.remove('historyUndo');
		} else {
			historyButtonElement.classList.add('historyUndo');
	  }
	});
});