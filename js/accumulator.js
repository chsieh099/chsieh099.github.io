let limit = 10;
let current = 0;

let limitInputElement;
let currentValueElement;

function accumulate() {
	const page = document.getElementById('page');
	if (current + 1 > limit) return;
	current += 1;
	_updateCurrent();
	_updateBackground();
}

function _updateBackground() {
	const percentage = (current/limit) * 100 + "%";
	const gradient = 'linear-gradient(to top, lightblue, lightblue ' + percentage + ', transparent ' + percentage + ', transparent)';
    page.style.backgroundImage = gradient;
}

function _updateCurrent() {
	currentValueElement.textContent = current.toString();
}

function updateLimit() {
	const newLimit = Number(limitInputElement.value);
	if (newLimit != limit) {
		current = 0;
		limit = newLimit;
		_updateCurrent();
		_updateBackground();
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Initialize values.
	limitInputElement = document.getElementById('limit-input');
	limitInputElement.value = limit.toString();

	currentValueElement = document.getElementById('current');
	currentValueElement.textContent = current.toString();

	historyButtonElement = document.getElementById('history');
	historyButtonElement.addEventListener('dblclick', (e) =>
	  console.log('Double tap detected!')
	);
});