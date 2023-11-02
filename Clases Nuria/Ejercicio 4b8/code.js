"use strict";

let btnAnadir = document.querySelector("#btnAnadir");
let btnSuma = document.querySelector("#btnSuma");

btnAnadir.addEventListener("click", anadir);
btnSuma.addEventListener("click", suma);

let divErrores = document.querySelector("#divErrores");
let divResultado = document.querySelector("#divResultado");

let listaCuentas = [];

function anadir() {

    divErrores.innerHTML = "";

    let numCuenta = document.querySelector("#txtNumeroCuenta").value;
    let nombre = document.querySelector("#txtNombre").value;
    let numSaldo = Number(document.querySelector("#txtSaldo").value);

    let cuenta = [numCuenta, nombre, numSaldo];
    listaCuentas.push(cuenta);
    

}




function suma() {

    let accAcreedores = 0;

for (let i = 0; i < listaCuentas.length; i++) {
    const cuenta = listaCuentas[i];
        if (cuenta[2]>0){
            accAcreedores+=cuenta[2];
        } else if (cuenta[2]==0){
            divErrores.innerHTML+=`<p>Cuenta nº${cuenta[0]} tiene saldo nulo.</p>`;
        } else{
            divErrores.innerHTML+=`<p>Cuenta nº${cuenta[0]} es Deudor.</p>`;
        }
        
    
}

divResultado.innerHTML= "La suma de todos los saldos de los acreedores es de: " + accAcreedores;

}