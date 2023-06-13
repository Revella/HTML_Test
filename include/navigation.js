/* PC Main Page navigation Background */ 
const navGnb = document.querySelector(".main_gnb");
const navGnbHeight = navGnb.getBoundingClientRect().height;

const pageUrl = window.location.href;

window.addEventListener("load",loadEvent());

function loadEvent() {
  if(pageUrl.indexOf("main") > - 1) {
    document.addEventListener("scroll", ()=> {
      if(window.scrollY > navGnbHeight) {
        navGnb.classList.add("on");
        gnbContent.classList.add("on");
      } else {
        navGnb.classList.remove("on");
        gnbContent.classList.remove("on");
      }
    })
  } else {
    navGnb.classList.add("on");
    gnbContent.classList.add("on");
  }
}

/* === Mobile Toggle === */
const toggleBtn = document.querySelector(".toggleBtn");
const mobileGnbContent = document.querySelector(".Mobile_gnb_content");
const gnbContent = document.querySelector(".gnb-content");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleBtn.classList.toggle("active");
  mobileGnbContent.classList.toggle("active");
})
