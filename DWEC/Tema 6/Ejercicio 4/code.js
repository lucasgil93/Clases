"use strict";

let arrAl = document.querySelectorAll("li");

let radiob = document.querySelector('input[name="rboton"]:checked').value;
console.log(radiob);

for (const alumno of arrAl) {
    alumno.addEventListener("click", ()=>{

        if (radiob=="aprobado"){
            alAprobados.appendChild(alumno.innerHTML);
        } else{
            alSuspensos.appendChild(alumno.innerHTML);
        }


    });
}

