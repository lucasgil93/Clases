"use strict";



let btnCrear = document.querySelector("#btnCrear");
let btnGenerarArchivo = document.querySelector("#btnGenerarArchivo");
let btnBorrar = document.querySelector("#btnBorrar");
let btnGuardar = document.querySelector("#btnGuardar");

let arrayPreguntas = [];

let divPreguntas = document.querySelector("#divPreguntas");
let divErrores = document.querySelector("#divErrores");


btnCrear.addEventListener("click", añadirPregunta);

function añadirPregunta() {

    divErrores.innerHTML = "";

    let sol = `<section>` 

    let txtPregunta = document.querySelector("#txtPregunta").value;
    let txtCorrecta = document.querySelector("#txtCorrecta").value;
    let txtIncorrecta1 = document.querySelector("#txtIncorrecta1").value;
    let txtIncorrecta2 = document.querySelector("#txtIncorrecta2").value;
    let txtIncorrecta3 = document.querySelector("#txtIncorrecta3").value;

    if (txtPregunta==""||txtCorrecta==""||txtIncorrecta1==""||txtIncorrecta2==""||txtIncorrecta3==""){
        divErrores.innerHTML="Hay campos vacios."
    } else{

        //   txtPregunta = txtPregunta.replaceAll("[~#={}:]","\\$0");
        txtPregunta = txtPregunta.replaceAll("#", "\\#");

        sol += `<h3>${txtPregunta}</h3>`;
        sol+=`<p>${txtCorrecta}</p><br>`;
        sol+=`<p>${txtIncorrecta1}</p><br>`;
        sol+=`<p>${txtIncorrecta2}</p><br>`;
        sol+=`<p>${txtIncorrecta3}</p><br>`;

    }

const pregunta1 = new Pregunta (txtPregunta, txtCorrecta, txtIncorrecta1, txtIncorrecta2, txtIncorrecta3);

sol+=`</section>`

divPreguntas.innerHTML+= sol;



}



if (txtPregunta == "") {
    divErrores.innerHTML += "No esta rellena la pregunta";
} else {
    sol += `<h3>${txtPregunta}</h3>`;
}
if (txtCorrecta == "") {
    divErrores.innerHTML += "No esta rellena la respuesta 1";
} else {
    sol+=`<p>${txtCorrecta}</p><br>`;
}
if (txtIncorrecta1 == "") {
    divErrores.innerHTML += "No esta rellena la respuesta 2";
}else{
    sol+=`<p>${txtIncorrecta1}</p><br>`;
}
if (txtIncorrecta2 == "") {
    divErrores.innerHTML += "No esta rellena la respuesta 3";
}else{
    sol+=`<p>${txtIncorrecta2}</p><br>`;
}
if (txtIncorrecta3 == "") {
    divErrores.innerHTML += "No esta rellena la respuesta 4";
}else{
    sol+=`<p>${txtIncorrecta3}</p><br>`;
}