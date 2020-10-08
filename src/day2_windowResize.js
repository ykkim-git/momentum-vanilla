/**
true && true = true
false && true = false
true && false = false
false && false = false

true || true = true
false || true = true
true || false = true
false || false = false
 */

/**
function handleOffline() {
	console.log('byebye')
}

function handleOnline() {
	console.log('welcome back')
}
window.addEventListener('offline', handleOffline) // 인터넷연결 끊겼을 때
window.addEventListener('online', handleOnline) // 인터넷연결 됐을 때

const BASE_COLOR = 'rgb(52, 73, 94)';
const OTHER_COLOR = '#7f8c8d';

function handleClick() {
	const currentColor = title.style.color;
	if (currentColor === BASE_COLOR) {
		title.style.color = OTHER_COLOR
	} else {
		title.style.color = BASE_COLOR
	}
}

function init () {
	title.style.color = BASE_COLOR;
	title.addEventListener('click', handleClick)
}
 */

// const title = document.querySelector('#title');
// const CLICKED_CLASS = 'clicked'

// function handleClick() {
// 	// const hasClass = title.classList.contains(CLICKED_CLASS);
// 	// if (hasClass) {
	// 	// 	title.classList.remove(CLICKED_CLASS);
	// 	// } else {
		// 	// 	title.classList.add(CLICKED_CLASS)
		// 	// }
		// 	// toggle: 클래스가 거기 있는지 체크해서 거기 있으면 add 없으면 remove
		// 	title.classList.toggle(CLICKED_CLASS)
		// }


const body = document.body;
const COLOR_YELLOW = 'yellow';
const COLOR_PURPLE = 'purple';
const COLOR_BLUE = 'blue';

function resized() {
	const width = window.innerWidth;
	if (width < 300) {
    body.className = COLOR_BLUE;
  } else if (width > 600) {
    body.className = COLOR_YELLOW;
  } else {
    body.className = COLOR_PURPLE;
	}
}

function init() {
	window.addEventListener('resize', resized)
} 
init();







