"use strict";

let resultado = document.querySelector("#resultado");


resultado.parentElement.parentElement.previousElementSibling.innerHTML="Lista de Animales";

resultado.parentElement.nextElementSibling.innerHTML="Lobo";

resultado.innerHTML="De Agua";

alert(resultado.parentElement.parentElement.nextElementSibling.innerHTML)