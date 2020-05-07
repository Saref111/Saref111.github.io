var button = document.querySelector("#button-menu");
var menu = document.querySelector(".main-nav__list");



if (button && menu) {
  button.classList.remove("main-nav__toggle--no-js");
  button.classList.add("main-nav__toggle--closed");
  menu.classList.add("main-nav__list--hidden");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.toggle("main-nav__list--hidden");
    button.classList.toggle("main-nav__toggle--opened");
    button.classList.toggle("main-nav__toggle--closed");
  });
}
