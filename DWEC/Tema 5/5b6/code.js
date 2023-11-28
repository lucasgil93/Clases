"use strict";

fechaNac.classList.add("oculto");

let nickname = txtNick.value;
let password = txtPass1.value;
let confirmPass = txtPass2.value;

btnEnviar.addEventListener("click", hazCosas);

function hazCosas(){
    alert("Cositas");
}

if (password === confirmPass){

} else{
    alert ("Contraseñas no coincidentes.")
}

rbNacimiento.addEventListener("change", ocultarDiv);

function ocultarDiv(){
    if (frmEj1.rbNacimiento.value=="No"){
    } else{
        fechaNac.classList.remove("oculto");
    };
}


let inputChecked =  frmEj1.querySelectorAll("input[type=checkbox]:checked");

if (inputChecked.length!=2){
    alert("Debe marcar 2 colores.")
}

if (inputChecked[0]==Rojo && inputChecked[1]==Azul){
    document.classList.add("Morado");
}

if (inputChecked[0]==Rojo && inputChecked[1]==Verde){
    document.classList.add("Amarillo");
}

if (inputChecked[0]==Verde && inputChecked[1]==Azul){
    document.classList.add("Turquesa");
}


