"use strict";

let arrayIngrediente = [];
let arrayCrema = [];

const anadirIngrediente = () => {


    const nombre = document.querySelector("#txtNombreIng").value;
    const cantidad = document.querySelector("#txtCantidad").value;

    const ing = new Ingrediente (nombre, cantidad);
    console.log(ing)

    arrayIngrediente.push(ing);



}

const anadirCrema = () => {

const nombre = document.querySelector("#txtNombre").value;
const precio = document.querySelector("#txtPrecio").value;

const crema = new Crema (nombre, precio, arrayIngrediente);
console.log(crema);

}

let btnAnadirCrema = document.querySelector("#btnAnadirCrema");
btnAnadirCrema.addEventListener("click", anadirCrema);

let btnAnadirIng = document.querySelector("#btnAnadirIng");
btnAnadirIng.addEventListener("click", anadirIngrediente);

