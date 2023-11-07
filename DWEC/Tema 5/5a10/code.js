"use strict";

/////////////////////
// FUNCTIONS
/////////////////////
const creaTabla = contenido =>{
  let s='<table>';

let splitContent = contenido.split(",");

let arrNum = [];
for (let i = 2; i < splitContent.length; i++) {
    
    if( i%2==0){
    } else{
        s+=`<div style="width:${splitContent[i]}px">${splitContent[i]}</div>`;
    }


    
    
}
s+="</table>";
 
output.innerHTML = s;
    
  }
 



const ordenar = columna =>{

  creaTabla( contenido );
}
/////////////////////
// MAIN
/////////////////////

//1.- Variable donde vamos a guardar el contenido del fichero JSON
let contenido;

//2.- Recuperamos las etiquetas para leer el fichero
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

//3.- Leemos el fichero
fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    // Cuando se haya seleccionado
    contenido = ( await file.text() );
    creaTabla( contenido );
  }
});