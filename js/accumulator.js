let current = 0;
let limit = 10;

function accumulate() {
	const page = document.getElementById('page');
	if (current + 1 > limit) return;
	current += 1;
	const percentage = (current/limit) * 100 + "%";
	const gradient = 'linear-gradient(to top, lightblue, lightblue ' + percentage + ', transparent ' + percentage + ', transparent)';
    page.style.backgroundImage = gradient;
}