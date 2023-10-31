"use strict";

//Funciones 

function setCursiva(){

    let texto = document.getElementsByTagName('p')[0].innerHTML;

    divTexto.innerHTML=`<i>${texto}</i>`;

};

function setNegrita(){

    let texto = document.getElementsByTagName('p')[0].innerHTML;
    
    divTexto.innerHTML=`<b>${texto}</b>`;

};


//Main

let colores = document.querySelector("#colores");
let animales = document.querySelector("#animales");
let divResultado = document.querySelector("#divResultado");

animales.addEventListener("change", ()=>{divResultado.innerHTML="Perro, Gato, Pez, Aguila, Gusano"});
colores.addEventListener("change", ()=>{divResultado.innerHTML="Negro, Blanco, Verde, Azul"});


let divTexto = document.querySelector("#divTexto");
divTexto.addEventListener("contextmenu", ()=>{document.querySelector(".menuoculto").style.display="block"} );

document.querySelector(".menuoculto").style.display="none";


let btnCursiva = document.querySelector("#btnCursiva");
let btnNegrita = document.querySelector("#btnNegrita");

btnCursiva.addEventListener("click", setCursiva);
btnNegrita.addEventListener("click", setNegrita);


