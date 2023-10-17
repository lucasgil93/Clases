"use strict";

/////////////
// FUNCTIONS
////////////////

console.log("Pedimos el radio de la esfera");

let n = prompt("Digame el radio de la esfera")

function areaEsfera(n) {

    return Math.PI * n * n;

}

console.log("El area de un circulo con radio " + n + " es " + areaEsfera(n));
console.log(`El area de un circulo con radio ${n} es ${areaEsfera(n)}`);


