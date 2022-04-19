const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newStore = "10 may 2022";

function countdown() {
	const storeOpeningDate = new Date(newStore);
	const currentDate = new Date();  //since the IST is GMT+5:30 this will also be shown in the time difference
	const totalSeconds = (storeOpeningDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//initial call
countdown();

setInterval(countdown, 1000);