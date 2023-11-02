"use strict";

let divResultado = document.querySelector("#divResultado");

divResultado.addEventListener("click", caraTriste);
divResultado.addEventListener("contextmenu", caraFeliz);
divResultado.addEventListener("dblclick", caraMolesta);

function caraTriste(ev) {
    divResultado.innerHTML = "🙁";
}

function caraFeliz(ev) {
    ev.preventDefault();
    divResultado.innerHTML = "😀";

}

function caraMolesta(ev) {
    divResultado.innerHTML = "😒";
}

document.addEventListener("keyup", e => {
     if (e.key == "a") { 
        alert("Lucas Gil Dominguez")
     } else if (e.key == "e") {
         alert("29") 
        } 
    }
);


let arrProvincias = ["Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón",
"Ciudad Real","Córdoba","Coruña","Cuenca","Girona","Granada","Guadalajara","Guipuzcoa","Huelva","Huesca","Jaén","León","Lleida",
"Rioja","Lugo","Madrid","Málaga", "Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca",
"Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid",
"Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];

let txtCP = document.querySelector("#txtCP").value;


function calcular (){




}

let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcular);





