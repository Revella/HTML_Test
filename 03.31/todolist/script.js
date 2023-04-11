const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document. querySelector('ul');

/*
  1. 삭제버튼 추가
  2. 데이터 저장
  3. 삭제버튼 클릭, 저장된 데이터 업데이트
 */

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const dellItem = (event) => {
  // console.log('삭제');
  // console.log(event.target.parentElement);
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
}

const addItem = (todo) => {
  if(todo.text !=='') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener('click', dellItem);

    
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
}

const handler = (evnet) => {
  evnet.preventDefault();//원래 기능을 막음

  const todo = {
    id: Date.now(),
    text: input.value
  };
  
  todos.push(todo);
  addItem(todo);
  save();
  input.value = '';
}

const init = () => {
  // const userTodos = localStorage.getItem('todos');
  // console.log(userTodos);
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  if(userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  }
}
init();
form.addEventListener('submit', handler);

// localStorage.setItem('hello','world');
// const mydata = localStorage.getItem('hello');
// console.log(mydata);