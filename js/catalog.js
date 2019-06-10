var products = document.querySelectorAll(".product");

var modal = document.querySelector(".modal");
var modalButton = modal.querySelector(".modal__button");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < products.length; i ++) {
  var cart = products[i].querySelector(".product__cart");
    cart.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
};

var closeModal = function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
};

modalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
