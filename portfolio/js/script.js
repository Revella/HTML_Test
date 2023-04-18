/* Main */
const mainPic = document.querySelector(".pic");
const pics = ["main-img_1.jpg", "main-img_2.jpg"]
mainPic.style.backgroundImage = `url(/img/${pics[1]})`;

// main gnb
let mainNav = document.querySelectorAll(".gnb a");

// mainNav.addEventListener("click", function() {
//   mainNav.classList.add("focus");
//   console.log(e);
  
// })

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
