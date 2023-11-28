"use strict"

let btn1 = document.getElementById("btn1");
let texto1 = txt1.value;
btn1.addEventListener("click", confirmRight);
let divRes1 = document.querySelector("#divRes1");

function confirmRight() {

    if (/[0-9]{2}[\-][aeiou]/.test(texto1)) {
        divRes1.innerHTML = "";
        divRes1.innerHTML = "Valido."
    } else {
        divRes1.innerHTML = "";
        divRes1.innerHTML = "No valido."
    };
}



let btn2 = document.getElementById("btn2");
let txt2 = document.getElementById("txt2").value;
btn2.addEventListener("click", confirmRight2);
let divRes2 = document.getElementById("divRes2");


function confirmRight2() {


    if (/[0-9]{8}[\-]?[A-Z a-z]/.test(txt2)) {
        divRes2.innerHTML = "";
        divRes2.innerHTML = "Valido."
    } else {
        divRes2.innerHTML = "";
        divRes2.innerHTML = "No valido."
    };
}

let btn3 = document.getElementById("btn3");
let txt3 = document.getElementById("txt3").value;
btn3.addEventListener("click", confirmRight3);
let divRes3 = document.getElementById("divRes3");


function confirmRight3(txt3) {


        let sol = /^i......[0-9]$/.test(txt3);
        sol &&= /[a-z]/.test(txt3)
        sol &&= /[A-Z]/.test(txt3)

    

}

// Apuntes

// form.rbNacimiento.value = (si o no) esto captura los radiobutton dentro de un form (de nombre o id "form");