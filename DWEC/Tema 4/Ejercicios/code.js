"use strict"

let divResultado = document.querySelector("#divResultado");


function nombreNum(n) {

    String(n);

    let numeros = n.split("");

    let nueva;

    for (let i = 0; i < numeros.length; i++) {

        switch (numeros[i]) {
            case "0":
                nueva.push("Cero");
                break;
            case "1":
                nueva.push("Uno");
                break;
            case "2":
                nueva.push("Dos");
                break;
            case "3":
                nueva.push("Tres");
                break;
            case "4":
                nueva.push("Cuatro");
                break;
            case "5":
                nueva.push("Cinco");
                break;
            case "6":
                nueva.push("Seis");
                break;
            case "7":
                nueva.push("Siete");
                break;
            case "8":
                nueva.push("Ocho");
                break;
            case "9":
                nueva.push("Nueve");
                break;
            default:

        }

    }

numeros.unshift("Cifra");
nueva.unshift("Numero");

divResultado.innerHTML += "<table><th>"+numeros[0] + nueva[0]+ "<th>";

for(let i=1;i<numeros.length;i++){

    divResultado.innerHTML +="<tr>"+ numeros[i] + nueva[i] + "<tr>";

}

divResultado.innerHTML+="</table>";
}




divResultado.innerHTML += "<p>Resultado</p>";


let arraygeneral = [
    ['Juan',   ['Granada',' Londres',' Roma']],
    ['Ana',    ['Bilbao', 'Sevilla', 'Roma']],
    ['Manuel', ['Granada', 'Paris', 'Londres', 'Roma']],
    ['Antonio',['Granada', 'Sevilla','Bilbao']],
    ['Elena',  ['Granada', 'Sevilla']],
    ['Jorge',  ['Sevilla']]
];


function arrayGen (arraygeneral){

for (let i=0; i< arraygeneral.length;i++){

    selNombre+=`<option value="${arraygeneral[i][0]}">`;
    let ciudades = arraygeneral[i][1];
        for(let j=0; i<ciudades.length;j++){

            selCiudad+=`<option value"${ciudades[j]}">`;

        }


}


}



arrayGen(arraygeneral);

let selNombre = document.querySelector("#selNombre");
let selCiudad = document.querySelector("#selCiudad");

