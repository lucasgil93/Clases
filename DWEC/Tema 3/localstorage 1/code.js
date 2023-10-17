"use strict";

/////////////////////
// FUNCTIONS
/////////////////////

function fichar() {

let fecha =  new Date ();

if (localStorage.arrFichajes == undefined){

    localStorage.arrFichajes = JSON.stringify([]);

} 

let arrFichajes = JSON.parse(localStorage.arrFichajes);
arrFichajes.push(fecha);
localStorage.arrFichajes = JSON.stringify(arrFichajes);

}

function mostrarFichajes() {

    /* let divFichajes = document.getElementById("divFichajes"); */
     let divFichajes = document.querySelector("#divFichajes"); /* Este es mas potente que el getelementbyID*/
	
    if (localStorage.arrFichajes==undefined){
        divFichajes.innerHTML = "<p>No hay ningun fichaje</p>";
        return;

    }

    let arrFichajes = JSON.parse(localStorage.arrFichajes);
    for (let fichaje of arrFichajes){
        divFichajes.innerHTML+="<p>"+fichaje+"</p>";
    }


}

function resetearFichajes() {

    localStorage.removeItem("arrFichajes")
}

/////////////////////
// MAIN
/////////////////////

//1.- Add event Listeners
document.querySelector("#btnFichar").addEventListener("click", fichar);
document.querySelector("#btnMostrar").addEventListener("click", mostrarFichajes);
document.querySelector("#btnResetear").addEventListener("click", resetearFichajes);
