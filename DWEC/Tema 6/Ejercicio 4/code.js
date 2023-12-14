"use strict";

let arrAl = document.querySelectorAll("li");


let listApro = document.querySelector("#alAprobados");
let listSusp = document.querySelector("#alSuspensos");


arrAl.forEach(element => {

    element.addEventListener("click", ()=>{

        let radiob = document.querySelector('input[name="rboton"]:checked').value;

        if (radiob=="aprobado"){
            listApro.append(element);   
        }else{
            listSusp.append(element);
        }
    });
    
});


