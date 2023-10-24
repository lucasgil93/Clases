"use strict";


class Fichero {

    constructor(nombre, tamaño) {
        this.nombre = nombre;
        this.tamano = tamaño;
    }


    extension() {

        return this.nombre.split(".").pop();

    }

    getDatos() {

        return "Nombre: " + this.nombre + " tamaño: " + this.tamano;
    }


}


class Cancion extends Fichero {

    constructor(nombre, tamano, nombreCancion, duracion) {
        super(nombre, tamano);
        this.nombreCancion =nombreCancion;
        this.duracion = duracion;
    }

    getDatos() {

        return "Nombre: " + this.nombre + " Cancion: " + this.nombreCancion + " tamaño: " + this.tamano + " duracion: " + this.duracion;

    }

}

let arrayFicheros = [];

function muestraArray() {

divResultado.innerHTML="<ul>"

    for (const i of arrayFicheros) {
        divResultado.innerHTML += "<li>" + i.getDatos() + "</li>";
    }

    divResultado.innerHTML+="<ul>"

};

function agregafichero() {

    let nombre = document.querySelector("#txtNombre").value;
    let tamano = document.querySelector("#txtTamano").value;
    let nombreCancion = document.querySelector("#txtCancion").value;
    let duracion = document.querySelector("#txtDuracion").value;

    let esCancion = ( document.querySelector("[name=tipo]:checked").value ==="1" ) ;

    if(esCancion){

        let can = new Cancion (nombre, tamano, nombreCancion, duracion);
        arrayFicheros.push(can);
    } else {
        let fich = new Fichero (nombre, tamano);
        arrayFicheros.push(fich);
    }


};

let btnAgregar = document.querySelector("#btnAgregar");
let btnMostrar = document.querySelector("#btnMostrar");

let divResultado = document.querySelector("#divResultado");

btnAgregar.addEventListener("click", agregafichero);
btnMostrar.addEventListener("click", muestraArray);



