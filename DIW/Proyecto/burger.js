"use strict";

const btnToggleMenu = document.querySelector("#btnToggleMenu");
const menuNav = document.querySelector("#menuNav");

btnToggleMenu.addEventListener("click", () => {
  const expandido = menuNav.getAttribute("aria-expanded") === "true";
  if(expandido){
    menuNav.setAttribute("aria-expanded", "false");
    menuNav.classList.toggle("expandido");
  }
  else{
    menuNav.setAttribute("aria-expanded", "true");
    menuNav.classList.toggle("expandido");
  }
});

document.addEventListener('click', function(e) {
  var elem = document.querySelector('#menuNav');

  if (!elem.contains(e.target)&& (!btnToggleMenu.contains(e.target))) {

      if (elem.classList.contains('expandido')) {
          elem.classList.remove('expandido');

      }
  }
});