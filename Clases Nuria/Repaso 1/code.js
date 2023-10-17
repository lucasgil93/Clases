"use strict"

let divResultado = document.querySelector("#divResultado");

divResultado.innerHTML = `<p>Los primeros 20 numeros impares son: </p>`

function impares() {


    let cont = 0;
    for (let i = 0; i <= 2000; i++) {

        if (cont <= 20) {
            if (i % 2 == 0) {

            } else {
                divResultado.innerHTML += `<p> ${i} </p>`;
                cont++;
            }
        }
    }
}

impares();