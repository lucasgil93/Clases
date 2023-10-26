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

    let arrayTextos = [];

    let sol = `<section>`;

    let txtPregunta = document.querySelector("#txtPregunta").value;
    let txtCorrecta = document.querySelector("#txtCorrecta").value;
    let txtIncorrecta1 = document.querySelector("#txtIncorrecta1").value;
    let txtIncorrecta2 = document.querySelector("#txtIncorrecta2").value;
    let txtIncorrecta3 = document.querySelector("#txtIncorrecta3").value;

    if (txtPregunta == "" || txtCorrecta == "" || txtIncorrecta1 == "" || txtIncorrecta2 == "" || txtIncorrecta3 == "") {
        divErrores.innerHTML = "Hay campos vacios."
    } else {

        arrayTextos.push(txtPregunta);
        arrayTextos.push(txtCorrecta);
        arrayTextos.push(txtIncorrecta1);
        arrayTextos.push(txtIncorrecta2);
        arrayTextos.push(txtIncorrecta3);

        for (let index = 0; index < arrayTextos.length; index++) {
            arrayTextos[index] = arrayTextos[index].replaceAll("#", "\\#");
            arrayTextos[index] = arrayTextos[index].replaceAll("~", "\\~");
            arrayTextos[index] = arrayTextos[index].replaceAll("=", "\\=");
            arrayTextos[index] = arrayTextos[index].replaceAll("{", "\\{");
            arrayTextos[index] = arrayTextos[index].replaceAll("}", "\\}");
            arrayTextos[index] = arrayTextos[index].replaceAll(":", "\\:");

        }

        sol += `<h3>${arrayTextos[0]}</h3>`;
        sol += `<p>${arrayTextos[1]}</p><br>`;
        sol += `<p>${arrayTextos[2]}</p><br>`;
        sol += `<p>${arrayTextos[3]}</p><br>`;
        sol += `<p>${arrayTextos[4]}</p><br>`;

        const pregunta1 = new Pregunta(arrayTextos[0], arrayTextos[1], arrayTextos[2], arrayTextos[3], arrayTextos[4]);
        arrayPreguntas.push(pregunta1);

    }

    let section = document.createElement("section");

    //boton descartar (no preguntes como esta hecho el boton jaja);

    const btnDescartar = document.createElement('button');
    btnDescartar.textContent = 'Descartar Pregunta';
    document.body.appendChild(btnDescartar);


    section.appendChild(btnDescartar);



    // boton recuperar (funciona de momento)
    const btnRecuperar = document.createElement('button');
    btnRecuperar.textContent = 'Recuperar Pregunta';
    document.body.appendChild(btnRecuperar);


    section.appendChild(btnRecuperar);


    sol += `</section>`


    divPreguntas.innerHTML += sol;

    divPreguntas.appendChild(section);
    btnRecuperar.addEventListener('click', recuperar);
    btnDescartar.addEventListener('click', descartar);



}

function guardarPreguntas() {

    const cuestionario1 = new Cuestionario(arrayPreguntas);

    let stringcuestiones = JSON.stringify(cuestionario1);

    localStorage.setItem(stringcuestiones);


}



function descartar() {

    alert("descarta");
}



function recuperar() {

    alert("recupera");
}
