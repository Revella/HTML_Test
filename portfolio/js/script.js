//Main
const mainPic = document.querySelector(".pic");
const pics = ["main-img_1.jpg", "main-img_2.jpg"]
mainPic.style.backgroundImage = `url(/img/${pics[1]})`;

// main gnb


// about -content
const aboutText = document.querySelector(".about-txt");
const aboutPic = document.querySelector("img");

aboutPic.addEventListener("mouseover", () => {
  aboutText.style.scale = 1.15;
})
aboutPic.addEventListener("mouseout", () => {
  aboutText.style.scale = 1;
})
