"use strict";

let resultado = document.querySelector("#resultado");


resultado.firstElementChild.innerHTML="Lista de Animales";

resultado.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = "de agua";

resultado.firstElementChild.nextElementSibling.lastElementChild.innerHTML = "Lobo";

alert(resultado.lastElementChild.innerHTML)
