"use strict"
let cantidad = document.getElementById("cantidad");
let bancoa = document.getElementById("bancoa");
let bancob = document.getElementById("bancob");
let inputCantidad = document.getElementById("inputCantidad");
let btnCantidad = document.getElementById("btnCantidad");

btnCantidad.addEventListener("click", function () {
    let cantidadValor = parseFloat(inputCantidad.value);
    let resultadoA = calculoBancoA(cantidadValor);
    let resultadoB = calculoBancoB(cantidadValor);
    bancoa.innerHTML = `<p>El deposito del banco A (2.25%): ${resultadoA} €</p>`;
    bancob.innerHTML = `<p>El deposito del banco B (1.75%): ${resultadoB} €</p>`;

    let resultadoC = resultadoB-resultadoA;

    cantidad.innerHTML = `<p> La diferencia entre los bancos seria de ${resultadoC} € </p>`;
});

function calculoBancoA(x) {
    return (x * 2.25) / 100;
}

function calculoBancoB(x) {
    return (x * 1.75) / 100;

}






