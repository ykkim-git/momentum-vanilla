console.dir(document)

const title = document.getElementById('title');
// title.innerHTML = 'HI! From JS'
// title.style.color = 'lightgray'
// document.title = "I own you now"

function handleResize(event) {
	console.log(event);
	// 이벤트를 다룰 함수를 만들때마다 
	// js는 자동적으로 함수를 객체에 붙인다.
}

function handleClick() {
	title.style.color = 'red';
}

// 이벤트처리
window.addEventListener('resize', handleResize);
// title.addEventListener('click', () => {
// 	title.style.color = 'black';
// })