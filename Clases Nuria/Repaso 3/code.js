"use strict"


let numerin = document.getElementById("inputNumber");
let divResultado = document.querySelector("#divResultado");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", function () {
    numerin = Number(numerin.value); // Convert the input value to a number

    unoydos(numerin);
});
function unoydos(numerin) {
    divResultado.innerHTML = "<ul>"; // Clear the div content before appending

    for (let i = 0; i < numerin; i++) {
      if (i % 2 !== 0) {
        divResultado.innerHTML += "<li>Hola<li>"; // Append "1" to the div
      } else {
        divResultado.innerHTML += "<li>Caracola</li>"; // Append "2" to the div
      }
    }

  }
