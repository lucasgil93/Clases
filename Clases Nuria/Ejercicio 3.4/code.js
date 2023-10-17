"use strict"

function notaMedia (){

let nota1 = Number(prompt("Diga su primera nota"));

let nota2 = Number(prompt("Diga su segunda nota"));

let nota3 = Number(prompt("Diga su tercera nota"));

let media = (nota1+nota2+nota3)/3;

alert("Su nota media es de " + media);

divResultado.innerHTML+=`<p> Su nota media es de${media}</p>`;

}


notaMedia();

divResultado = document.querySelector("divResultado");