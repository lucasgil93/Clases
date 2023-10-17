"use strict"

function notaMedia (){

    let suma =  4+8+9+7+2+6;

    suma = suma/6;

    console.log(suma);

    divResultado.innerHTML+=`<p>Con getElementbyID ${suma}</p>`;
    divResultado.innerHTML+=`<p>Con query selector ${suma}</p>`;

}

function volumenEsferas (){

let vol1 = 4/3 * Math.PI * (1*1*1);
let vol2 = 4/3 * Math.PI * (2*2*2);

divResultado.innerHTML+=`<p> Volumen esfera radio 1 = ${vol1}</p>`;
divResultado.innerHTML+=`<p> Volumen esfera radio 2 = ${vol2}</p>`;


}


function repaso (){


let edad = prompt("Cuantos años tienes?");

if (edad!=null){

    alert("Vaya, " + edad + " años ya! Como pasa el tiempo...");
    alert("Y el año que viene " + (Number(edad)+Number(1)));
}

}

repaso();
notaMedia();
volumenEsferas();


divResultado = document.querySelector("divResultado");

