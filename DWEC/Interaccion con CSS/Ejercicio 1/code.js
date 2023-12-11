"use strict";

let btn = document.querySelector("#btn");

btn.addEventListener("click", cambiarEstilos);

function cambiarEstilos(){


btn.style="background-color: #47adad;"

}


let mode = document.querySelector("#mode");
mode.addEventListener("click", claroOscuro);

function claroOscuro(){

    if(document.styleSheets[1].disabled){
        document.styleSheets[1].disabled=false;
    } else{ 
        document.styleSheets[1].disabled=true;
    }
   

}