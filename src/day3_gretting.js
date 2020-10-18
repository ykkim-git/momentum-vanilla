const form = document.querySelector('.js-form'),
			input = form.querySelector('input'),
			greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
			SHOWING_CN = 'showing';

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
	// 이벤트가 올라가면서 다른 모든 것들이 event가 발생
	// form submit하면 document까지 올라간다.
	// 이벤트의 기본동작을 막아준다.
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
}

function askForName() {
	form.classList.add(SHOWING_CN);
	form.addEventListener('submit', handleSubmit)
}

function paintGreeting(text) {
	form.classList.remove(SHOWING_CN)
	greeting.classList.add(SHOWING_CN)
	greeting.innerText = `Welcome, ${text}`
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS)
	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser)
	}
}

function init() {
	loadName();
}
init();