"use strict";



let btnCrear = document.querySelector("#btnCrear");
let btnGenerarArchivo = document.querySelector("#btnGenerarArchivo");
let btnBorrar = document.querySelector("#btnBorrar");
let btnGuardar = document.querySelector("#btnGuardar");

let arrayPreguntas = [];

let divPreguntas = document.querySelector("#divPreguntas");
let divErrores = document.querySelector("#divErrores");

let cont = -1; //Este contador habria que meterlo en el array de textos o en el propio objeto pregunta para que los metodos getPregunta y descartarPregunta puedan acceder a el y saber cual es la pregunta a modificar o borrar!!

btnCrear.addEventListener("click", añadirPregunta);

function añadirPregunta() {


    // añadir contador en -1 para que cuando se cree el primer obejto sea la posicion 0 del array y se pueda llamar desde los metodos descartarPregunta y recueprar
    divErrores.innerHTML = "";

    let arrayTextos = [];

    let sol = `<section>`;

    let txtPregunta = document.querySelector("#txtPregunta").value;
    let txtCorrecta = document.querySelector("#txtCorrecta").value;
    let txtIncorrecta1 = document.querySelector("#txtIncorrecta1").value;
    let txtIncorrecta2 = document.querySelector("#txtIncorrecta2").value;
    let txtIncorrecta3 = document.querySelector("#txtIncorrecta3").value;


    document.getElementById("txtPregunta").value = "";
    document.getElementById("txtCorrecta").value = "";
    document.getElementById("txtIncorrecta1").value = "";
    document.getElementById("txtIncorrecta2").value = "";
    document.getElementById("txtIncorrecta3").value = "";

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
        cont++;
        arrayPreguntas.push(pregunta1);


        sol += `<button type="button" onclick="descartarPregunta(this.id)" id=${cont}>Descartar Pregunta</button>`
        sol += `<button type="button" onclick="getPregunta(this.id)" id=${cont}>Recuperar Pregunta</button>`


        sol += `</section>`


        divPreguntas.innerHTML += sol;


    }

}


btnBorrar.addEventListener("click", borrarPreguntas);
btnGuardar.addEventListener("click", guardarPreguntas);
btnGenerarArchivo.addEventListener("click", generaArchivo);

function guardarPreguntas() {

const cuestiones = arrayPreguntas.map((pregunta)=>({
    pregunta: pregunta.pregunta,
    rCorrecta: pregunta.rCorrecta,
    rI1: pregunta.rI1,
    rI2: pregunta.rI2,
    rI3: pregunta.rI3,
}));

const cuestionario1 = new Cuestionario(cuestiones);
const jsonString = JSON.stringify(cuestionario1);
localStorage.setItem("cuestionario", jsonString);



}

function borrarPreguntas() {

    arrayPreguntas = [];
    divErrores.innerHTML += "Se han borrado las preguntas.";
    divPreguntas.innerHTML = "";
    cont = -1;
    if (arrayPreguntas.length>0){
        divPreguntas.innerHTML+=`<button type="button" onclick="descartarPregunta(0)" id=0>Descartar Pregunta</button>`;
           
    };
    localStorage.removeItem("cuestionario");
}


function descartarPregunta(x) {
    arrayPreguntas.splice(x, 1);
    cont--;
    divPreguntas.innerHTML = "";

    if (arrayPreguntas.length === 0) {
        divErrores.innerHTML = "Todavia no hay preguntas creadas.";
    } else {
        arrayPreguntas.forEach((pregunta, index) => {
            let sol = `<section>`;
            sol += `<h3>${pregunta.pregunta}</h3>`;
            sol += `<p>${pregunta.rCorrecta}</p><br>`;
            sol += `<p>${pregunta.rI1}</p><br>`;
            sol += `<p>${pregunta.rI2}</p><br>`;
            sol += `<p>${pregunta.rI3}</p><br>`;
            sol += `<button type="button" onclick="descartarPregunta(${index})" id=${index}>Descartar Pregunta</button>`;
            sol += `<button type="button" onclick="getPregunta(${index})" id=${index}>Recuperar Pregunta</button>`;
            sol += `</section>`;
            divPreguntas.innerHTML += sol;
        });
    }
}

function getPregunta(x) {

    let pregunta1 = arrayPreguntas[x];

    let txtPregunta = pregunta1.pregunta;
    let txtCorrecta = pregunta1.rCorrecta;
    let txtIncorrecta1 = pregunta1.rI1;
    let txtIncorrecta2 = pregunta1.rI2;
    let txtIncorrecta3 = pregunta1.rI3;

    let arrayTextos = [];

    arrayTextos.push(txtPregunta);
    arrayTextos.push(txtCorrecta);
    arrayTextos.push(txtIncorrecta1);
    arrayTextos.push(txtIncorrecta2);
    arrayTextos.push(txtIncorrecta3);

    for (let index = 0; index < arrayTextos.length; index++) {
        arrayTextos[index] = arrayTextos[index].replaceAll("\\", "");


    }

    document.getElementById("txtPregunta").value = arrayTextos[0];
    document.getElementById("txtCorrecta").value = arrayTextos[1];
    document.getElementById("txtIncorrecta1").value = arrayTextos[2];
    document.getElementById("txtIncorrecta2").value = arrayTextos[3];
    document.getElementById("txtIncorrecta3").value = arrayTextos[4];



};

function generaArchivo(){

    

};


