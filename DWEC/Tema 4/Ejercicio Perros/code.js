"use strict";




let arrayPerro = [];



const anadirPerro = () => {

        const nombre = document.querySelector("#txtNombre").value;
        const edad = document.querySelector("#txtEdad").value;
        const raza = document.querySelector("#txtRaza").value;


        const p = new Perro(nombre, edad, raza);

        //console.log(p);
        arrayPerro.push(p);


}


const ordInsercion = () => {

        let divResultado = document.querySelector("#divResultado");


        let sol = "<ul>";

       for (const perro of arrayPerro) {
        
        sol+=  "<li>" + perro.mostrarDatos() + "</li>";

       }

        sol+= "</ul>"

        divResultado.innerHTML=sol;
}

const ordEdad = () => {

        let divResultado = document.querySelector("#divResultado");


        let sol = "<ol>";

       for (const perro of arrayPerro.toSorted((a,b)=>a.edad-b.edad)) {
        
        sol+=  "<li>" + perro.mostrarDatos() + "</li>";

       }

        sol+= "</ol>"

        divResultado.innerHTML=sol;


}

const ordRaza = () => {

        let divResultado = document.querySelector("#divResultado");


        let sol = "<ol>";

       for (const perro of arrayPerro.toSorted((a,b)=>a.raza.localeCompare(b.raza))) {
        
        sol+=  "<li>" + perro.mostrarDatos() + "</li>";

       }

        sol+= "</ol>"

        divResultado.innerHTML=sol;


}


let btnAnadir = document.querySelector("#btnAnadir");
btnAnadir.addEventListener("click", anadirPerro);

let btnOrdIns = document.querySelector("#btnOrdIns");
btnOrdIns.addEventListener("click", ordInsercion);

let btnOrdEdad = document.querySelector("#btnOrdEdad");
btnOrdEdad.addEventListener("click", ordEdad);

let btnOrdRaza = document.querySelector("#btnOrdRaza");
btnOrdRaza.addEventListener("click", ordRaza);









