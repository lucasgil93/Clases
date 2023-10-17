"use strict"

function calculaNota() {

    let num = Number(document.getElementById("txtNota").value);
    let divResultado = document.getElementById("divResultado");


    // si en vez del div hubieramos usado una p podriamos meter dentro del innerhtml directamente el texto sin necesidad de la etiqueta <p>
    if (num == ""){
    divResultado.innerHTML = `<p><strong>Ingrese una nota</strong></p>`;
    }
    if (num < 0||num >10) {
        divResultado.innerHTML = `<p><strong>Nota no valida</strong></p>`;
    } else if (num < 5) {
        divResultado.innerHTML = `<p><strong>Suspenso</strong></p>`;
    } else if (num < 6) {
        divResultado.innerHTML = `<p><strong>Suficiente</strong></p>`;
    } else if (num < 7) {
        divResultado.innerHTML = `<p><strong>Bien</strong></p>`;
    } else if (num < 9) {
        divResultado.innerHTML = `<p><strong>Notable</strong></p>`;
    } else {
        divResultado.innerHTML = `<p><strong>Sobresaliente</strong></p>`;
    }


}

//1. recuperamos el boton y le metemos un addeventlistener

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener('click', calculaNota);