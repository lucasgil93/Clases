"use strict";


class Fichero {

    constructor(nombre, tamaño){
        this.nombreFichero= nombre;
        this.tamano = tamaño;
    }
  

extension() {
    
    return "Extension: " + this.tamano;

}

getDatos(){

    return "Nombre: " + this.nombre + " tamaño: " + this.tamano;
}


}


class Cancion extends Fichero {

    constructor(nombreCancion, tamano, duracion){
        super(nombreCancion, tamano);
        this.duracion = duracion;
    }

    getDatos(){

        return "Nombre: " + this.nombre + " tamaño: " + this.tamano + " duracion: " + this.duracion;
        
    }

}

let arrayFicheros = [];

function muestraArray () {

 for (const i of arrayFicheros) {
    divResultado.innerHTML+= i;
 }
    
    };

function agregafichero(){

alert("agrega cosas");
    };

let btnAgregar = document.querySelector("#btnAgregar");
let btnMostrar = document.querySelector("#btnMostrar");

let divResultado = document.querySelector("#divResultado");

btnAgregar.addEventListener("click", agregafichero);
btnMostrar.addEventListener("click", muestraArray);



