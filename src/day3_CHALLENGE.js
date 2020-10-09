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

	XMAS.innerText = `🎄${days < 10 ? `0${days}` : days}d ${
		hours < 10 ? `0${hours}` : hours}h ${
		minutes < 10 ? `0${minutes}` : minutes}m ${
		seconds < 10 ? `0${seconds}` : seconds}s 🎄`
}

function init() {
  setInterval(getTime, 1000);
}
init();
