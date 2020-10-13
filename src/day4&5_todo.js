const toDoForm = document.querySelector('.js-toDoForm'),
	toDoInput = toDoForm.querySelector('input'),
	toDoList = document.querySelector('.js-toDoList')

const TODOS_LS = 'toDos'; // 로컬스토리지 저장 key

let toDos = []; // TODO LIST 저장 배열

/** TODO 삭제 */
function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter(function(toDo) {
		return toDo.id !== parseInt(li.id);
	})
	toDos = cleanToDos
	saveToDos();
}

/** TODO 로컬스토리지 저장 */
function saveToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

/** TODO 리스트 만들기 */
function paintToDo(text) {
	const li = document.createElement('li');
	const delBtn = document.createElement('button');
	const span = document.createElement('span');
	const newId = toDos.length + 1;

	span.innerText = text;
	delBtn.innerHTML = '❌';
	delBtn.addEventListener('click', deleteToDo)

	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;

	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
	saveToDos();
}

/** TODO 등록 이벤트 */
function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = '';
}

/** 로컬스토리지 TODO 불러오기 */
function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS)
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos)
		parsedToDos.forEach(function(toDo) {
			paintToDo(toDo.text)
		});
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener('submit', handleSubmit)
}
init();
