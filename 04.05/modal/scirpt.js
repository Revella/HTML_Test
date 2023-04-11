const openButton = document.querySelector('.open');
const container = document.querySelector('.container');
const closeButton = document.querySelector('.close');
const imgBtn = document.querySelector('.imgBtn');

openButton.addEventListener('click',() => {
  container.style.display = 'flex';
  openButton.style.display = 'none';
})

closeButton.addEventListener('click', () => {
  container.style.display = 'none';
  openButton.style.display ='block';
})
imgBtn.addEventListener('click', () => {
  container.style.display = 'none';
  openButton.style.display ='block';
})