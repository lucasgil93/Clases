"use strict";



//FUNCIONES


function calcular() {
    let notaMedia = (4 + 8 + 9 + 7 + 1 + 6) / 6;
    alert("El resultado es " + + notaMedia)

}

/**
 *
 *
 * @param {Number} a
 * @param {Number} b
 * @return // Devuelve la suma.
 */
function sumar(a, b) {
    return a + b;
}

function volumenEsfera1() {

    let radius = 1;
    alert("El volumen de la esfera de radio 1 = " + 4 / 3 * Math.PI * radius ** 3);
    // se supone que se debe hacer con console.log ();


}

function volumenEsfera2() {

    let radius = 2;
    alert("El volumen de la esfera de radio 2 = " + 4 / 3 * Math.PI * radius ** 3);


}

//MAIN


let btnEmpezar = document.getElementById("btnEmpezar");
btnEmpezar.addEventListener("click", calcular);

let btnEmpezar2 = document.getElementById("btnEmpezar2");
btnEmpezar.addEventListener("click", volumenEsfera1);

let btnEmpezar3 = document.getElementById("btnEmpezar3");
btnEmpezar.addEventListener("click", volumenEsfera2);



