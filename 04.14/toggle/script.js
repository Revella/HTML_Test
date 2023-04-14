const view = document.querySelector("#view");
const detail = document.querySelector("#detail");

view.onclick = () => {
  detail.classList.toggle("hidden");
}