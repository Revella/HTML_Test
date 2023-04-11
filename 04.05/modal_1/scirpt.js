const openBtn = document.querySelector('.open');
const modal = document.querySelector('.modal');
const img = document.querySelector('.img');
const closeBtn = document.querySelector('close');

openBtn.addEventListener('click', ()=> {
  modal.style.display = 'flex';
  openBtn.style.display = 'none';
})
modal.addEventListener('click', ()=> {
  modal.style.display = 'none';
  openBtn.style.display = 'block';
})
close.addEventListener('click', ()=> {
  modal.style.display = 'none';
  openBtn.style.display = 'block';
})