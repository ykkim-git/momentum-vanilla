const selectCountry = document.querySelector('#js-select'),
countryInHTML = document.querySelector('.initCountry');

function saveCountry(text) {
	localStorage.setItem('country', text);
}

function loadCountry() {
	const currentCountry = localStorage.getItem('country')
	if (currentCountry) {
		countryInHTML.innerHTML = `I COME FROM '${currentCountry}'`;
	}
}

selectCountry.addEventListener('change', (event) => {
	event.preventDefault();
	const selectedValue = event.target.value;
	saveCountry(selectedValue)
	countryInHTML.innerHTML = `I COME FROM '${selectedValue}'`;
})

function init() {
	loadCountry();
}
init();