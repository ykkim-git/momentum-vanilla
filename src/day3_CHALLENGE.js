// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const XMAS = document.querySelector(".js-xmas");

function getTime() {
  // Don't delete this.
	const xmasDay = new Date("2020-12-24:00:00:00+0900");
	const today = new Date();
	const gap = xmasDay.getTime() - today.getTime();
	
	const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((gap % (1000 * 60)) / 1000);

	XMAS.innerHTML = `🎄${days < 10 ? `0${days}` : days}d ${
		hours < 10 ? `0${hours}` : hours}h ${
		minutes < 10 ? `0${minutes}` : minutes}m ${
		seconds < 10 ? `0${seconds}` : seconds}s 🎄`

	/** nico`s answer */		
	/**
	const xmasDay = new Date("2020-12-24:00:00:00+0900");
	const now = new Date();
	// This is in milisecondsx
	const difference = new Date(xmasDay - now);
	const secondsInMs = Math.floor(difference / 1000);
	const minutesInMs = Math.floor(secondsInMs / 60);
	const hoursInMs = Math.floor(minutesInMs / 60);
	const days = Math.floor(hoursInMs / 24);
	const seconds = secondsInMs % 60;
	const minutes = minutesInMs % 60;
	const hours = hoursInMs % 24;
	const daysStr = `${days < 10 ? `0${days}` : days}d`;
	const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
	const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
	const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
	clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
 	*/
}

function init() {
  setInterval(getTime, 1000);
}
init();
