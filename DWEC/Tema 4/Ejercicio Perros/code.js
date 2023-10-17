"use strict"

let divResultado = document.querySelector("#divResultado");

divResultado.innerHTML = `<p>Ejercicio Perros</p>`;


let inputNombre = document.querySelector("#inputNombre");
let inputEdad = document.querySelector("#inputEdad");
let inputRaza = document.querySelector("#inputRaza");

let btnAnadir = document.querySelector("#btnAnadir");
btnanadir.addEventListener("click", anadirPerro());
let btnRaza = document.querySelector("#btnRaza");
btnRaza.addEventListener("click", ordenaRaza());
let btnInsercion = document.querySelector("#btnInsercion");
btnInsercion.addEventListener("click", ordenaInsercion());
let btnEdad = document.querySelector("#btnEdad");
btnEdad.addEventListener("click", ordenaEdad());

function Perros (no, ed, ra){

this.nombre = no,
this.edad = ed,
this.raza = ra,
this.ordenaRaza = (o, o1 ) => (o.raza>o1.raza);
this.ordenaEdad = (o, o1 ) => (o.edad>o1.edad);

}


function anadirPerro(){

let p = new Perros(inputNombre, inputEdad, inputRaza);
arrayPerro.push(p);

}

let arrayPerro =[];

for (let index = 0; index < arrayPerro.length; index++) {

        divResultado.innerHTML+= arrayPerro[i].nombre;
    
}


