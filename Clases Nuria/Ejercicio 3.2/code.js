"use strict"

function radioCirculo (){

console.log("Pedimos el radio del circulo");
let radio = prompt();

let area = radio * radio * Math.PI;

console.log("El area del circulo de radio " + radio + " es "  + area);

}

function areaTriangulo(){

    console.log("Pedimos la base y la altura del triangulo");
    let base = prompt("Diga la base de su triangulo");
    let altura = prompt("Diga la altura de su triangulo");

    let area =  (base*altura)/2;

    console.log("El area del triangulo es " + area);


}

// radioCirculo();

areaTriangulo();