"use strict";

let txt1 = document.querySelector("#txt1");

let btnAñadir = document.querySelector("#btnAñadir");

let btnEliminar = document.querySelector("#btnEliminar");

let holaC = document.querySelector("#parrafo");

btnAñadir.addEventListener("click", anadirTail);
btnEliminar.addEventListener("click", eliminarTail);

function anadirTail(){

    holaC.classList.add(txt1.value);

}

function eliminarTail(){

    holaC.classList.remove(txt1.value);
}

//en html p.clase${}*5 para hacer cosas multiples veces ya con class numericas