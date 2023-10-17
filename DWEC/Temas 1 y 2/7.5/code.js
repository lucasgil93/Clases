"use strict"


function validarDatos() {


    //1. comprobamos que los campos estan rellenos.

    let nombreCompleto = (document.getElementById("txtNombre").value);
    let edad = (document.getElementById("txtEdad").value);
    let turno = document.getElementById("txtTurno").value;
    let pass1 = document.getElementById("txtPassword1").value;
    let pass2 = document.getElementById("txtPassword2").value;
    let resultado = document.getElementById("errores");

    //Se vacia el resultado - error porque en los demas se añade con el +=;
    resultado.innerHTML="";


    if (nombreCompleto===""||edad===""|turno===""){

        resultado.innerHTML+="Hay campos vacios."
    }

    if (nombreCompleto.length>20){

        resultado.innerHTML+="El nombre no puede tener mas de 20 caracteres."
    }
    
    edad=Number(edad);
    if (edad <18 || edad >67) {

        resultado.innerHTML += "La edad debe de estar entre 18 y 67 años."
    }


    if (turno!=="Mañana"&& turno!=="Tarde"){

        resultado.innerHTML+="El turno debe ser mañana o tarde."
    }

    if (pass1 !== pass2) {

        resultado.innerHTML += "Contraseña no coincidentes";

    }

    if (pass1.length<6||pass2.length<6){

        resultado.innerHTML+= "Las contraseñas no pueden ser de menos de 6 caracteres."
    }

   




}


let btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener('click', validarDatos);




