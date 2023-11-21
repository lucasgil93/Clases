"use strict";

const dialogo = document.querySelector("#dialogo");

document.querySelector("#btnMostrar").addEventListener('click', ()=>{
  dialogo.showModal();
});

dialogo.addEventListener('close', () => {
  console.log('Valor devuelto: '+ dialogo.returnValue); 
  //concebollista o sincebollista
})

document.querySelector("#formulario");