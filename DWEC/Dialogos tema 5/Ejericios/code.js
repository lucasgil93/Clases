let texto = document.getElementById("txtname");


document.addEventListener("keyup", e => {
    divResultado.innerHTML = texto.value;
})


btnProcede.addEventListener('click', comprueba);

function comprueba() {

    let contador = 0;

    let cbox1 = document.getElementById("mañana");
    let cbox2 = document.getElementById("tarde");
    let cbox3 = document.getElementById("noche");

    let checkboxes = [cbox1, cbox2, cbox3];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            contador++;
        }
    }



    if (contador >= 3) {
        divCosas.innerHTML = `<strong>Error: no puede seleccionar las tres</strong>`;
    }
    else if (contador == 0) {
        divCosas.innerHTML = `<strong>Error: Seleccione al menos una opcion</strong>`;
    } else {
        divCosas.innerHTML = "";
        if (cbox1.checked) {
            divCosas.innerHTML += "Turno de Mañana "
        }

        if (cbox2.checked) {
            divCosas.innerHTML += "Turno de tarde "
        }

        if (cbox3.checked) {
            divCosas.innerHTML += "Turno de Noche "
        }
    }
}


let btnAleatorio = document.getElementById("btnAleatorio");

btnAleatorio.addEventListener("click", generaAleatorios);

function generaAleatorios() {


    let textboxes = document.querySelectorAll(".numerin");



    for (let i = 0; i < textboxes.length; i++) {

        let random_sign = -1 + Math.round(Math.random()) * 2;

        let numberin = random_sign * Number(Math.round(Math.random() * 100));
        textboxes[i].value = numberin;
    }
}



let btnPositivos = document.getElementById("btnPositivos");

btnPositivos.addEventListener("click", generaPositivos);

function generaPositivos() {


    let textboxes = document.querySelectorAll(".numerin");

    for (let i = 0; i < textboxes.length; i++) {

        let numberin = Number(Math.round(Math.random() * 100));

        while (numberin <= 0) {
            numberin = Number(Math.round(Math.random() * 100));
        }

        textboxes[i].value = numberin;
    }
}

let btncuenta = document.getElementById("btncuenta");

btncuenta.addEventListener("click", cuentaPos);

function cuentaPos() {

    let contpos = 0;

    let textboxes = document.querySelectorAll(".numerin");

    for (let i = 0; i < textboxes.length; i++) {

        if (textboxes[i].value > 0) {
            contpos++;
        }
    }
    alert("Hay " + contpos + " elementos positivos.");
}




