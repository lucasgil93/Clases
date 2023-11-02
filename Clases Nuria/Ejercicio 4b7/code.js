"use strict";

let btnAnadir = document.querySelector("#btnAnadir");
let btnGenerar = document.querySelector("#btnGenerar");

btnAnadir.addEventListener("click", anadir);
btnGenerar.addEventListener("click", generar);

let divErrrores = document.querySelector("#divErrores");
let divResultado = document.querySelector("#divResultado");

let arrNombres = [];
let arrApellidos = [];

function anadir() {

    divErrrores.innerHTML = "";

    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;

    if (nombre.length == 0 || apellido.length == 0) {
        divErrrores.innerHTML = "Faltan campos por rellenar";
    } else {
        arrNombres.push(nombre);
        arrApellidos.push(apellido);
    }

}

function generar() {

    let numNom;
    let numApe;

    if (arrNombres.length == 0 || arrApellidos.length == 0) {
        divErrrores.innerHTML = "No hay campos para generar nada maquena";
    } else {
        numNom = Math.floor(Math.random() * arrNombres.length);
        numApe = Math.floor(Math.random() * arrApellidos.length);
    }
    divResultado.innerHTML += `<p>Nombre: ${arrNombres[numNom]}   Apellido: ${arrApellidos[numApe]}<p>`;

}