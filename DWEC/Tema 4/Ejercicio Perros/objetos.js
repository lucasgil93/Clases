"use strict";


////// Clases 

function Perro (no, ed, ra){

    this.nombre = no,
    this.edad = ed,
    this.raza = ra
    this.mostrarDatos = function () { return `${this.nombre} (${this.raza}), ${this.edad} años`}
    }