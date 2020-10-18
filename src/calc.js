const btns = document.querySelectorAll('.numbers'),
			reset = document.querySelector('.reset'),
			result = document.querySelector('.result');

function clickNumbers(event) {
	result.value += event.target.innerText;
}

function resetFn() {
	result.value = '';
}

function plusFn() {

}

function minusFn() {

}

function divideFn() {

}

function multiflyFn() {

}

function init() {
	btns.forEach(btn => {
		btn.addEventListener('click', clickNumbers);
	}),
	reset.addEventListener('click', resetFn)
}
init();