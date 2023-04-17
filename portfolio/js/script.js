const aboutText = document.querySelector(".about-txt");
const aboutPic = document.querySelector(".about-pic > img");

aboutPic.addEventListener("mouseover", () => {
  // aboutText.style.transform  = `translateX(-10%)`;
  aboutText.style.scale = 1.2;
})