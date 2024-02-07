let hourEl = document.querySelector('.hour');
let minuteEl = document.querySelector('.minute');
let secondEl = document.querySelector('.second');
let timeEl = document.querySelector('.time');
let dateEl = document.querySelector('.date');
let circleEL = document.querySelector('.circle');
let btn = document.querySelector('.toggle');

let days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

let months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

btn.addEventListener('click', (e) => {
	let html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light mode';
	}
});

function setTime() {
	let time = new Date();
	let month = time.getMonth();
	let day = time.getDay();
	let date = time.getDate();
	let hours = time.getHours();
	let hoursForClock = hours % 12;
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();

	timeEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
		minutes < 10 ? `0${minutes}` : minutes
	}`;
	dateEl.innerHTML = `${days[day]}, ${months[month]}`;
	dateEl.appendChild(circleEL).innerHTML = `${date}`;

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;

	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;

	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(setTime, 1000);
