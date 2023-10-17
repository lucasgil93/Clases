"use strict";
let cantidad = document.getElementById("cantidad");
let inputCantidad = document.getElementById("inputCantidad");
let btnCalcular = document.getElementById("btnCalcular");
let bancoa = document.getElementById("bancoa");
let bancob = document.getElementById("bancob");

btnCalcular.addEventListener("click", function () {
    let cantidadValor = parseFloat(inputCantidad.value);

    let resultadoA = calculoBancoA(cantidadValor);
    let resultadoB = calculoBancoB(cantidadValor);
    let resultadoC = resultadoA-resultadoB;

    bancoa.innerHTML = `<p>El depósito del banco A (2.25%): ${resultadoA.toFixed(2)} €</p>`;
    bancob.innerHTML = `<p>El depósito del banco B (1.75%): ${resultadoB.toFixed(2)} €</p>`;
    cantidad.innerHTML = `<p> La diferencia entre los bancos seria de ${resultadoC} € </p>`;
});

function calculoBancoA(x) {
    return (x * 2.25) / 100;
}

function calculoBancoB(x) {
    return (x * 1.75) / 100;
}