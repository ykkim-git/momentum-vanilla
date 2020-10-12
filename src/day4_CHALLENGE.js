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


/** nico */
// const select = document.querySelector(".js-select");

// function handleChange() {
//   const selected = select.value;
//   localStorage.setItem("country", selected);
// }

// function loadCountries() {
//   const selected = localStorage.getItem("country");
//   if (selected) {
//     const option = document.querySelector(`option[value="${selected}"]`);
//     option.selected = true;
//   }
// }

// loadCountries();
// select.addEventListener("change", handleChange);
