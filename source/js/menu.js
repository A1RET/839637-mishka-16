var menuToggle = document.querySelector(".menu-toggle");
var nav = document.querySelector(".main-nav");

menuToggle.classList.remove("menu-toggle--no-js");
nav.classList.add("main-nav--hide");

menuToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuToggle.classList.toggle("menu-toggle--closed");
  menuToggle.classList.toggle("menu-toggle--opened");
  nav.classList.toggle("main-nav--hide");
});
