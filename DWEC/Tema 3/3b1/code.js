"use strict"


  let arrPreguntas=[ 
    ["6x4", 24],  
    ["5x5", 25], 
    ["Raiz cuadrada de 81", 9], 
    ["Precio del litro de AOVE", 10],
    
  ];

 
  let m =  document.querySelector("main");

  for (let i = 0; i<arrPreguntas.length; i++){;
  m.innerHTML+=`<div onclick="revelar(${i})"><p>${arrPreguntas[i][0]}</p></div>`;
}

function revelar(n){

  let div = document.querySelector("main > div:nth-child("+ (n+1)+")");

  if (arrPreguntasCara[n]){
    div.innerHTML= `<p>${arrPreguntas[n][1]}</p><button>Acertada</button>`;
  } else{
    div.innerHTML= `<p>${arrPreguntas[n][0]}</p>`;
  }

  arrPreguntasCara[n] = !arrPreguntasCara[n];




}