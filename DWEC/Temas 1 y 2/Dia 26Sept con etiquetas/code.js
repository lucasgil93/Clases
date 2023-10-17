"use strict";

/////////////
// FUNCTIONS
////////////////

//simplecss.org para el css ese estilizado chulo


function calcularArea() {

    // 1 recuperamos el radio del circulo.
    let radio = Number(document.getElementById("txtRadio").value);

    // 2 calculamos el area
    let area =  radio*radio*Math.PI;
   // alert("El area del circulo de radio " + radio + " es " + Math.PI * radio * radio);

   // en HTML (div#divResultado + tab ) vale para crear el div con el id ya

   // 3 lo mostramos en un div
   let divResultado =  document.getElementById("divResultado");
   divResultado.innerHTML = `<p><strong>Area:</strong> ${area}</p>`;
}


/////////////
// MAIN
////////////////

//1. Recupero la etiqueta del boton y le asigno un addEventListener

let btnCalcular = document.getElementById("btnCalcular");
// let btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener('click', calcularArea);
