let limit;
let increment;
let current = 0;
let categoryIndex = 0;

let limitInputEl;
let currentValueEl;

let categoryImageEl;

const categories = new Map([
	['water', {
		limit: 8,
		increment: 1,
		color: 'blue',
	}],
	['calories', {
		limit: 1600,
		increment: 100,
		color: 'orange',
		unit: 'cal',
	}],
	['budget', {
		limit: 500,
		increment: 10,
		color: 'green',
		unit: '$',
	}],
]);
const categoryList = Array.from(categories.entries());

function accumulate() {
	const page = document.getElementById('page');
	if (current + 1 > limit) return;
	current += increment;
	_updateCurrentDisplay();
	_updateBackground();
}

function toggleCategory() {
	if (!categoryImageEl) {
		categoryImageEl = document.getElementById('category-image');
	}
	categoryIndex = categoryIndex + 1 >= categoryList.length ? 0 : categoryIndex + 1;

	const category = categoryList[categoryIndex];
	categoryImageEl.src = `images/${category[0]}.svg`;
	_updateLimit(category[1].limit);
	increment = category[1].increment;

	_resetAccumulator();
}

function readLimitInput() {
	const newLimit = Number(limitInputEl.value);
	if (newLimit != limit) {
		_updateLimit(newLimit);
		_resetAccumulator();
	}
}

function _updateLimit(newLimit) {
	limit = newLimit;
	limitInputEl.value = newLimit.toString();
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
	currentValueEl.textContent = current.toString();
}

document.addEventListener("DOMContentLoaded", function () {
	// Initialize values.
	const category = categoryList[0];
	limit = category[1].limit;
	increment = category[1].increment;

	// Update display values.
	limitInputEl = document.getElementById('limit-input');
	_updateLimit(limit);

	currentValueEl = document.getElementById('current');
	currentValueEl.textContent = current.toString();

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