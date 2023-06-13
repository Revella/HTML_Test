/* === Mobile Toggle === */
const toggleBtn = document.querySelector(".toggleBtn");
const mobileGnbContent = document.querySelector(".Mobile_gnb_content");
const gnbContent = document.querySelector(".gnb-content");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleBtn.classList.toggle("active");
  mobileGnbContent.classList.toggle("active");
})
