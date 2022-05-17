/*==================== Show/Hide Menu when click icon Toggle-Close ====================*/
const navMenu = document.querySelector("#nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("showMenu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("showMenu");
  });
}

/*==================== Show/Hide Menu when click nav__link ====================*/
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((n) =>
  n.addEventListener("click", () => {
    navMenu.classList.remove("showMenu");
  })
);

/*==================== Scroll menu ====================*/
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 100) header.classList.add("scroll--header");
  else header.classList.remove("scroll--header");
});

/*==================== Scroll Up ====================*/
const scrollUp = document.querySelector(".scroll__up");
window.addEventListener("scroll", () => {
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
});
