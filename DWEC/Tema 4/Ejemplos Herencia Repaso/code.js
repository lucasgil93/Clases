"use strict";

// Creacion de objetos literales con metodo

//let alumno ={
//nombre:"Javier",
//edad: 42,
//getDatos: function(){
//    return `Nombre: ${this.nombre}, edad: ${this.edad}`
//}
//}

//console.log(alumno.getDatos());


function Alumno (nombre, edad){

    this.nombre= nombre;
    this.edad = edad;
   // this.getDatos=function(){
     //   return `Nombre: ${this.nombre}, edad: ${this.edad}`;
   // }
}


// esta es la manera de meterle un metodo a un objeto de manera eficiente.
Alumno.prototype.getDatos=function(){
    return `Nombre: ${this.nombre}, edad: ${this.edad}`;
}

Alumno.prototype.curso = "23-24-1";


let a1 = new Alumno("Javier", 42);
let a2 = new Alumno ("Paco", 25);

console.log(a1.getDatos() + ", Curso: "+ a1.curso);
console.log(a2.getDatos() + ", Curso: "+ a2.curso);