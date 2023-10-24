"use strict";

let divResultado = document.querySelector("#divResultado");

let btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", fechas);

function fechas (){

    let fechaInicial = document.querySelector("#txtFechaInicial").value;
    let fechaFinal = document.querySelector("#txtFechaFinal").value;

    let año1 = fechaInicial.split("-")[0];
    let mes1 = fechaInicial.split("-")[1];
    let dia1 = fechaInicial.split("-")[2];

    let fecha1 = new Date (año1, mes1, dia1);
    
    let año2 = fechaFinal.split("-")[0];
    let mes2 = fechaFinal.split("-")[1];
    let dia2 = fechaFinal.split("-")[2];

    let fecha2 = new Date (año2, mes2, dia2);

    let f1 = fecha1.getTime();
    let f2 = fecha2.getTime();

    let resultado = f2-f1;


     divResultado.innerHTML+=(Math.round(resultado/(1000*60*60*24)))+" dias";


}

