let rangeFlag = document.querySelector('#range').value;
const rangeinput = document.querySelector('#range');
const startButton = document.querySelector('#startButton');

rangeinput.addEventListener('input', rangeValueFn);
startButton.addEventListener('click', gameStart);

function checkNumber(person, computer) {
	const result = document.querySelector('#result');
	if (person === computer) {
		result.innerHTML = 'YOU WON!!'
	} else {
		result.innerHTML = 'You lost...'
	}
}

function rangeValueFn(event) {
	const range = event.target.value;
	document.querySelector('#range_span').innerHTML = range;
	rangeFlag = range;
}

function gameStart() {
	const guessNumber = document.querySelector('#guessNumber').value;
	const machineNumber = Math.floor(Math.random() * rangeFlag);

	if (guessNumber === '' || guessNumber === 0) {
		return false;
	} else {
		document.querySelector('#chose-number').innerHTML = guessNumber;
		document.querySelector('#machine-number').innerHTML = machineNumber;
	}

	checkNumber(Number(guessNumber), machineNumber);
}