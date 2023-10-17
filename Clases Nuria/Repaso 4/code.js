"use strict"

let divResultado = document.querySelector("#divResultado");
askNumber();
function askNumber() {
    let number;
    let acc = 0;
    let mayor = 0;
    let menor = 10000000;
    let contador = 0;
    let bool = false;
    do {
        number = prompt("Diga un numero positivo");
        number = Number(number);
        if (number < 0) {
        } else if (number > 0) {
            acc += number;
            if (mayor < number) {
                mayor = number;
            }
            if (menor > number) {
                menor = number;
            }
        } else if (number === 0) {
            bool = true;
        }
        contador++;
    } while (bool === false);
    let media = acc / contador
    divResultado.innerHTML = "";
    divResultado.innerHTML += `<p> La cantidad de numeros positivos metidos ha sido de: ${contador} </p>`;
    divResultado.innerHTML += `<p> La suma de los numeros positivos metidos ha sido de: ${acc} </p>`;
    divResultado.innerHTML += `<p> La media de los numeros positivos metidos ha sido de: ${media} </p>`;
    divResultado.innerHTML += `<p> El mayor de los numeros positivos metidos ha sido de: ${mayor} </p>`;
    divResultado.innerHTML += `<p> El menor de los numeros positivos metidos ha sido de: ${menor} </p>`;


}