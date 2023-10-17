"use strict"

//Objeto vacio:

let objetovacio = {}
let objetovacio1 = new Object;


//Objeto con cosas
let alumno ={

    nombre:"Javier",
    edad: 42,
}

//Objeto con metodos

console.log(`Nombre: ${alumno.nombre} Edad: ${alumno.edad}`);

alumno ={

    nombre:"Javier",
    edad: 42,
    saludo: function(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
    },
    mostrar(){
        return `Nombre: ${this.nombre} Edad: ${this.edad}`;
    },
    saludoFlecha: ()=>{
        return `Hola soy ${this.nombre} y tengo ${this.edad} años`; //el this se desvincula. y apareceria undefined.
    }
}

console.log(alumno.saludo());
console.log(alumno.mostrar());

alumno.edad = 43;

alumno.getEdad = function(){

    return this.edad;
}

console.log("Edad del alumno: " + alumno.getEdad());


