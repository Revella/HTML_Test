// Clock
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function toClock() {
  const now = new Date();

  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
}
setInterval(toClock, 1000);


// Todo list
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];

const save = () => {
  localStorage.setItem('todos',JSON.stringify(todos));
}

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
}


const addItem = (todo) => {
  if(todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener('click', delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (event) => {
  event.preventDefault(); //초기값 삭제

  const todo = {
    id: Date.now(),
    text: input.value
  };

  todos.push(todo);
  addItem(todo);
  save();
  input.value='';
}
const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  if(userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    }
  );
  }
  todos = userTodos;
}

init();
form.addEventListener('submit', handler);