const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document. querySelector('ul');

form.addEventListener('submit', function(evnet) {
  evnet.preventDefault();//원래 기능을 막음


  if(input.value !=='') {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li); 
    input.value = '';
  }
});
