"use strict";

//Functions

//Main
let divResultado = document.querySelector("#divResultado");
let divEventos = document.querySelector("#divEventos");


divEventos.addEventListener("click", () => {
    divResultado.innerHTML += `<p>Se hizo click</p>`;
});


divEventos.addEventListener("dblclick", () => {
    divResultado.innerHTML += `<p>Se hizo doubleclick</p>`;
});

divEventos.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();
    divResultado.innerHTML += `<p>Se hizo click derecho</p>`;
});

document.querySelector("#txtDato").addEventListener("keydown", e =>
{if (e.key=="Backspace")
 document.querySelector("#txtDato").value="" })