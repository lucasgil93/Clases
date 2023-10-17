"use strict";

/////////////
// FUNCTIONS
////////////////


function muestraTabla() {

    // 1 recuperamos el numero
    let numero = Number(document.getElementById("txtNumero").value);


    // 3 lo mostramos en un div
    let tablaMultiplicar = document.getElementById("tablaMultiplicar");
    tablaMultiplicar.innerHTML = `
    <p> ${numero} x 0 = ${numero * 0}</p>
    <p> ${numero} x 1 = ${numero * 1}</p>
    <p> ${numero} x 2 = ${numero * 2}</p> 
    <p> ${numero} x 3 = ${numero * 3}</p> 
    <p> ${numero} x 4 = ${numero * 4}</p> 
    <p> ${numero} x 5 = ${numero * 5}</p> 
    <p> ${numero} x 6 = ${numero * 6}</p> 
    <p> ${numero} x 7 = ${numero * 7}</p> 
    <p> ${numero} x 8 = ${numero * 8}</p> 
    <p> ${numero} x 9 = ${numero * 9}</p> 
    <p> ${numero} x 10 = ${numero * 10}</p>`;
}



/////////////
// MAIN
////////////////

//1. Recupero la etiqueta del boton y le asigno un addEventListener

let btnMostrar = document.getElementById("btnMostrar");
// let btnCalcular = document.querySelector("#btnCalcular");

btnMostrar.addEventListener('click', muestraTabla);

//mejor forma

//document.getElementById("btnMostrar").addEventListener('click', muestraTabla);
