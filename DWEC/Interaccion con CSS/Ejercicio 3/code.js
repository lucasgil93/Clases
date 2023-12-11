"use strict";

let txt1 = document.querySelector("#txt1");

let btnAñadir = document.querySelector("#btnAñadir");
let btnColorear = document.querySelector("#btnColorear");

let divRes =  document.querySelector("#divResultado");

btnAñadir.addEventListener("click", añadirTexto);
btnColorear.addEventListener("click", añadirColores);


function añadirTexto(){

    textos.push(txt1.value);

    let sol = "<ul>";

    for (let i = 0; i < textos.length; i++) {
        
        sol+=`<li>${textos[i]}</li>`
        
    }
    sol+="</ul>";

    divRes.innerHTML=sol;
}

function añadirColores(){
   
    let sol = "<ul>";

    for (let i = 0; i < textos.length; i++) {
        
        sol+=`<li>${textos[i]}</li>`
        
    }
    sol+="</ul>";

    divRes.innerHTML=sol;

}


let textos = [];