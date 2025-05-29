let current = 0;
let limit = 10;

let limitInputElement;



function accumulate() {
	const page = document.getElementById('page');
	if (current + 1 > limit) return;
	current += 1;
	updateBackground();
}

function updateBackground() {
	const percentage = (current/limit) * 100 + "%";
	const gradient = 'linear-gradient(to top, lightblue, lightblue ' + percentage + ', transparent ' + percentage + ', transparent)';
    page.style.backgroundImage = gradient;
}

function updateLimit() {
	const newLimit = Number(limitInputElement.value);
	if (newLimit != limit) {
		current = 0;
		limit = newLimit;
		updateBackground();
	}
}

document.addEventListener("DOMContentLoaded", function () {
  limitInputElement = document.getElementById('limit-input');
  limitInputElement.value = limit.toString();
});