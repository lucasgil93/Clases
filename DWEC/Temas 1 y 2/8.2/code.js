"use strict";

function divisores(n) {
    let texto = `<p>Divisores de ${n}: </p>`;

    texto += "<ul>";
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
           // console.log(i);
            texto += "<li>" + i + "</li>";
        }
    }

    divResultado.innerHTML += texto;
}


let divResultado = document.getElementById("divResultado");

let n = -1;
while (n != 0) {
    n = prompt("Introduzca un número");
    if (n == "") {
        divResultado.innerHTML = "<p>Debe introducir un numero</p>";
        break;
    }
    n= Number(n);
    if (isNaN(n)){
        divResultado.innerHTML = "<p>Debe introducir un numero</p>";
        break;
    }


    divisores(n);
}