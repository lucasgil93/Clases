"use strict";

let btnOrden =  document.querySelector("#btnOrden");

btnOrden.addEventListener("click", ()=>{

    let tbody = document.querySelector("table tbody");

    Array.from(tbody.children).toSorted( (f1,f2) => f1.children[0].innerText>f2.children[0].innerText).forEach( fila => {
      tbody.appendChild(fila);
    });

});

let btnbuscar = document.querySelector("#btnbuscar");



btnbuscar.addEventListener("click", ()=>{
    

    let txtnombre = document.querySelector("#txtnombre").value;

    let notice = document.querySelector(".notice");


    let tbody = document.querySelector("table tbody");

    Array.from(tbody.children).toSorted( (f1,f2) => f1.children[0].innerText>f2.children[0].innerText).forEach( fila => {

        let nombrefila =  fila.innerHTML;

        console.log(nombrefila);

        let funcion = /txtnombre/;

        if (funcion.test(nombrefila)){
            notice.innerHTML+="<li>"+fila.innerHTML+"</li>";
        }
      
    });



});
