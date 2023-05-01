/* === Contact Page Modal === */
const emailBtn = document.querySelector(".contact-mail");
const emailModal = document.querySelector(".ctModal");
const contactClose = document.querySelector(".conCloseBtn");

emailBtn.addEventListener("click", () => {
  emailModal.style.display = "block";
})
contactClose.addEventListener("click", () => {
  emailModal.style.display = "none";
})