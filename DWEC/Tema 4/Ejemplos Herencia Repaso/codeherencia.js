"use strict";

let persona = {

    mayorDeEdad: false,
    curso: "23-24",
}

function Alumno (nombre, edad) {

    this.nombre= nombre;
    this.edad= edad;
}

//alumno.__proto__=persona; //no recomendable pero funciona (herencia por prototipo)s
//Object.setPrototypeOf(alumno, persona); //La version buena
Alumno.prototype =persona;

let a1 = new Alumno ("Javier", 42);
let a2 = new Alumno("Paco", 25);

a1.curso="22-23"

console.log("Nombre: " + a1.nombre + " Curso: " + a1.curso);
console.log("Nombre: " + a2.nombre + " Curso: " + a2.curso);