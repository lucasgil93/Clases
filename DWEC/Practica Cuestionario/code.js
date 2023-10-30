"use strict";



let btnCrear = document.querySelector("#btnCrear");
let btnGenerarArchivo = document.querySelector("#btnGenerarArchivo");
let btnBorrar = document.querySelector("#btnBorrar");
let btnGuardar = document.querySelector("#btnGuardar");

let arrayPreguntas = [];

let divPreguntas = document.querySelector("#divPreguntas");
let divErrores = document.querySelector("#divErrores");

let cont = -1; //Este contador habria que meterlo en el array de textos o en el propio objeto pregunta para que los metodos recuperar y descartar puedan acceder a el y saber cual es la pregunta a modificar o borrar!!

btnCrear.addEventListener("click", añadirPregunta);

function añadirPregunta() {


    // añadir contador en -1 para que cuando se cree el primer obejto sea la posicion 0 del array y se pueda llamar desde los metodos descartar y recueprar
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
        cont++;
        arrayPreguntas.push(pregunta1);

        
        sol+= `<button type="button" onclick="descartar(this.id)" id=btnD${cont}>Descartar Pregunta</button>`
        sol+= `<button type="button" onclick="recuperar(this.id)" id=btnR${cont}>Recuperar Pregunta</button>`

    
        sol += `</section>`
    
    
        divPreguntas.innerHTML += sol;
    
        divPreguntas.appendChild(section);
      
    }

    



}


btnBorrar.addEventListener("click", borrarPreguntas);

function guardarPreguntas() {

    const cuestionario1 = new Cuestionario(arrayPreguntas);

    let stringcuestiones = JSON.stringify(cuestionario1);

    localStorage.setItem(stringcuestiones);


}

function borrarPreguntas(){

    arrayPreguntas = [];
    divPreguntas.innerHTML = ""
    divPreguntas.innerHTML = "Se han borrado las preguntas."
    divErrores.innerHTML = "";
}



function descartar(x) {

    alert(x);
}



function recuperar(cont) {

    alert(cont);
}
