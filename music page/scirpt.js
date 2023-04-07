const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;

let i = 0;

for(let el of lists) {
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`
  i++;
  
  let pic = el.querySelector(".pic");
  pic.style.backgroundImage = `url(/img/member${i}.jpg)`;

  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  play.addEventListener("click", e=>{
    e.currentTarget.closest("article").querySelector(".pic").classList.add('on');
    e.currentTarget.closest("article").querySelector("audio").play();
  }) 

  pause.addEventListener("click", e=> {
    e.currentTarget.closest("article").querySelector("pic").classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  })

  load.addEventListener("click", e=> {
    e.currentTarget.closest("article").querySelector("pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  })
}

const prev = document.querySelector(".btnprev");
const next = document.querySelector(".btnnext");

let num = 0

prev.addEventListener("click", ()=> {
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;
  (active==0 ? active == len : active == activation(active, lists));
})
next.addEventListener("click", ()=> {
  num--;
  next.style.transform = `rotate(${deg * num}deg)`;
  (active==0 ? active == len : active == activation(active, lists));  
});

let active = 0
function activation(index, list) {
  for(let el of lists) {
    el.classList.remove("on");
  }
  list[index].classList.add("on")
}
