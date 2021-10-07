const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify 이용한 문자열 변환
}

function deleteToDo(event) {
  // 'X' 버튼 눌린 li 삭제 함수
  const li = event.target.parentElement; // parentElement로 버튼의 상위 태그 찾음.
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 'x'가 클릭된 내용과 다른 것만 추려서 다시 만든다. 이때 toDo.id는 number임으로 li.id도 변환하여야 한다.
  saveToDos(); // 다시 실행하는 것 잊지 말아야~!
}

function paintToDo(newToDo) {
  // newToDo 에는 이제 객체가 들어온다!
  const li = document.createElement("li");
  li.id = newToDo.id; // id 부여
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    // id 생성 위해 객체로 만든다. (삭제 기능 위한)
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); // newToDoObj 객체를 푸쉬한다.
  paintToDo(newToDoObj); // newToDoObj 객체를 준다.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  // null check!
  const parsedToDos = JSON.parse(savedTodos); // JSON.parse 로 변환!
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //(item) => paintToDo(item)
}
