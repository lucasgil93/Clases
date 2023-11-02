"use strict";

let btnCrear = document.querySelector("#btnCrear");
let btnGenerarArchivo = document.querySelector("#btnGenerarArchivo");
let btnBorrar = document.querySelector("#btnBorrar");
let btnGuardar = document.querySelector("#btnGuardar");

let cuestionario = new Cuestionario(); // Objeto cuestionario para almacenar las preguntas

let divPreguntas = document.querySelector("#divPreguntas");
let divErrores = document.querySelector("#divErrores");

btnCrear.addEventListener("click", añadirPregunta);

function añadirPregunta() {
    divErrores.innerHTML = "";
    const txtPregunta = document.querySelector("#txtPregunta").value;
    const txtCorrecta = document.querySelector("#txtCorrecta").value;
    const txtIncorrecta1 = document.querySelector("#txtIncorrecta1").value;
    const txtIncorrecta2 = document.querySelector("#txtIncorrecta2").value;
    const txtIncorrecta3 = document.querySelector("#txtIncorrecta3").value;

    if (txtPregunta === "" || txtCorrecta === "" || txtIncorrecta1 === "" || txtIncorrecta2 === "" || txtIncorrecta3 === "") {
        divErrores.innerHTML = "Hay campos vacíos.";
    } else {
        const pregunta = new Pregunta(txtPregunta, txtCorrecta, txtIncorrecta1, txtIncorrecta2, txtIncorrecta3);
        cuestionario.añadirPregunta(pregunta);

        actualizarDivPreguntas();
    }

    // Limpiar campos de entrada
    document.getElementById("txtPregunta").value = "";
    document.getElementById("txtCorrecta").value = "";
    document.getElementById("txtIncorrecta1").value = "";
    document.getElementById("txtIncorrecta2").value = "";
    document.getElementById("txtIncorrecta3").value = "";
}

btnBorrar.addEventListener("click", borrarPreguntas);
btnGuardar.addEventListener("click", guardarPreguntas);
btnGenerarArchivo.addEventListener("click", generaArchivo);

function borrarPreguntas() {
    cuestionario.borrarPreguntas();
    divErrores.innerHTML = "Se han borrado las preguntas.";
    actualizarDivPreguntas();
    localStorage.removeItem("cuestionario");
}

function actualizarDivPreguntas() {
    divPreguntas.innerHTML = "";

    if (cuestionario.preguntas.length === 0) {
        divErrores.innerHTML = "Todavía no hay preguntas creadas.";
    } else {
        cuestionario.preguntas.forEach((pregunta, index) => {
            const preguntaHTML = pregunta.toHTMLUl();
            const sol = `<section><h3>${pregunta.pregunta}</h3>${preguntaHTML}
                        <button type="button" onclick="descartarPregunta(${index})" id="${index}">Descartar Pregunta</button>
                        <button type="button" onclick="getPregunta(${index})" id="${index}">Recuperar Pregunta</button></section>`;
            divPreguntas.innerHTML += sol;
        });
    }
}

function descartarPregunta(id) {
    cuestionario.descartarPregunta(id);
    actualizarDivPreguntas();
}

function getPregunta(id) {
    const pregunta = cuestionario.getPregunta(id);
    document.getElementById("txtPregunta").value = pregunta.pregunta;
    document.getElementById("txtCorrecta").value = pregunta.rCorrecta;
    document.getElementById("txtIncorrecta1").value = pregunta.rI1;
    document.getElementById("txtIncorrecta2").value = pregunta.rI2;
    document.getElementById("txtIncorrecta3").value = pregunta.rI3;
}

function guardarPreguntas() {
    const jsonString = cuestionario.serializar();
    localStorage.setItem("cuestionario", jsonString);
}

function generaArchivo() {
    const cuestionarioString = localStorage.getItem("cuestionario");

    if (cuestionarioString) {
        const cuestionario = Cuestionario.deserializar(cuestionarioString);

        // Crear el contenido del archivo
        const contenidoArchivo = cuestionario.generarContenidoArchivo();

        // Crear un enlace para descargar el archivo
        const enlaceDescarga = document.createElement('a');
        const archivoBlob = new Blob([contenidoArchivo], { type: 'text/plain' });

        enlaceDescarga.href = URL.createObjectURL(archivoBlob);
        enlaceDescarga.download = 'cuestionario.txt';
        enlaceDescarga.textContent = 'Enlace descarga';

        const divEnlace = document.getElementById('divEnlace');
        divEnlace.innerHTML = "";
        divEnlace.appendChild(enlaceDescarga);
    }
}



