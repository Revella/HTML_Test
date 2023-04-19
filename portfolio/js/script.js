/* Main */
const mainPic = document.querySelector(".pic");
const pics = ["main-img_1.jpg", "main-img_2.jpg", "main-img_1.jpg", "main-img_2.jpg"]
// mainPic.style.backgroundImage = `url(/img/${pics[1]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach((e) => {
  e.addEventListener("click", (e) => {
    if(e.target.classList === "btn_back") {
      i--;
      if (i < 0) {
        i = pics.length -1;
      }
    } else if (e.target.classList === "btn_next") {
      i++;
      if( i >= pics.length) {
        i = 0;
      }
    }
  mainPic.style.backgroundImage = `url(/img/${pics[i]})`;
  })
})
// main gnb
let mainNav = document.querySelectorAll(".navBtn");


// about -content
const aboutContents = document.querySelector(".about-contents");
const aboutText = document.querySelector(".about-txt");

aboutContents.addEventListener("mouseover", () => {
  aboutText.style.scale = 1.15;
})
aboutContents.addEventListener("mouseout", () => {
  aboutText.style.scale = 1;
})

//Day Dark Button
const DayNigth = document.querySelector(".dark-btn");

DayNigth.addEventListener("click", () => {
  document.body.classList.toggle("on");

  aboutText.classList.toggle("on");
  if(DayNigth.innerHTML == "Dark") {
    DayNigth.innerHTML = "Day"
  } else if(DayNigth.innerHTML == "Day") {
    DayNigth.innerHTML = "Dark";
  }
})
