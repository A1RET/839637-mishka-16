var order = document.querySelector(".good-description__button");

var modal = document.querySelector(".modal");
var modalButton = modal.querySelector(".modal__button");
var overlay = document.querySelector(".overlay");

var closeModal = function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
};

order.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--show");
  overlay.classList.add("overlay--show");
});

modalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


