const toDoForm = document.querySelector('.todo-form'),
			toDoInput = document.querySelector('.todo-input'),
			toDoPending = document.querySelector('.todo-pending'),
			toDoFinished = document.querySelector('.todo-finished');
			
const TODOS_PENDING = 'PENDING';
const TODOS_FINISHED = 'FINISHED';

let toDos = [];
let toDosFinished = [];

/** TODO 로컬스토리지 저장 */
function saveToDos(flag) {
	if (flag === 'pen') {
		localStorage.setItem(TODOS_PENDING, JSON.stringify(toDos));
	} else {
		localStorage.setItem(TODOS_FINISHED, JSON.stringify(toDosFinished));
	}
	
}

/** delete todo */
function deleteToDo (event) {
	const btn = event.target;
	const li = btn.parentNode;
	toDoPending.removeChild(li);
	const cleanToDos = toDos.filter((todo) => {
		return todo.id !== parseInt(li.id);
	})
	toDos = cleanToDos;
	saveToDos('pen');
}

/** check finish todo */
function handleChecked(event) {
	const btn = event.target;
	const li = btn.parentNode; // clicked li
	toDoPending.removeChild(li);

	
	const currentValue = toDos.filter((todo) => {
		return todo.id === parseInt(li.id);
	});
	toDosFinished = currentValue;
	paintToDo('finished', ...currentValue)
}

function paintToDo(flag, text) {
	const li = document.createElement('li');
	const delBtn = document.createElement('button');
	const finishedBtn = document.createElement('button');
	const span = document.createElement('span');
	const newId = toDos.length + 1;
	const newId2 = toDosFinished.length + 1;

	span.innerText = text;
	delBtn.innerHTML = '❌';
	delBtn.addEventListener('click', deleteToDo);
	
	finishedBtn.addEventListener('click', handleChecked);

	li.appendChild(span);
	li.appendChild(delBtn);
	li.id = newId;
	
	const toDoObj = {
		text: text,
		id: flag === 'pen' ? newId : newId2
	};
	
	if (flag === 'pen') {
		finishedBtn.innerHTML = '✔';
		li.appendChild(finishedBtn);
		toDoPending.appendChild(li)
		toDos.push(toDoObj);
		saveToDos('pen');
	} else {
		finishedBtn.innerHTML = '⏮';
		li.appendChild(finishedBtn);
		toDoFinished.appendChild(li)
		toDosFinished.push(toDoObj);
		saveToDos('finished');
	}
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo('pen', currentValue);
	toDoInput.value = '';
}

function loadToDos() {
	const loadedToDosPending = localStorage.getItem(TODOS_PENDING)
	const loadedToDosFinished = localStorage.getItem(TODOS_FINISHED)
	const parsedToDosPending = JSON.parse(loadedToDosPending);
	const parsedToDosFinished = JSON.parse(loadedToDosFinished);

	if (loadedToDosPending !== null) {
		parsedToDosPending.forEach(function(toDo) {
			paintToDo('pen', toDo.text);
		});
	} else if (loadedToDosFinished !== null) {
		parsedToDosFinished.forEach(function(toDo) {
			paintToDo('finished', toDo.text);
		});
	}
}

function init() {
	toDoForm.addEventListener('submit', handleSubmit);
	loadToDos();
}
init();