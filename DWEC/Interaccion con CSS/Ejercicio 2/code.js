"use strict";

let txt1 = document.querySelector("#txt1").value;

let btnAñadir = document.querySelector("#btnAñadir");

let btnEliminar = document.querySelector("#btnEliminar");

let holaC = document.querySelector("#parrafo");

btnAñadir.addEventListener("click", anadirTail);
btnEliminar.addEventListener("click", eliminarTail);

function anadirTail(){

holaC.classList.add(txt1);
}

function eliminarTail(){



holaC.classList.remove(txt1);

}