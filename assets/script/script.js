//BURGERMENU

//Min burgermenu skal åbne/lukke + skifte baggrundsfarve(toggle) når jeg klikker på den (addeventlistener)
let burgerMenu = document.getElementById("burger-menu");
let overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
