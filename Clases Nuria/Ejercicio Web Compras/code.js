"use strict";

let arrProductos=[ 
    ["Ambientador", 1.25],  
    ["Queso en lonchas", 2.80], 
    ["Turrón de chocolate", 1.70], 
    ["Chirimoya", 1.54],
    ["Granada", 0.48],  
    ["Arroz", 1.30],
  ];



  for (let i = 0; i < arrProductos.length; i++) {
    let nombre = arrProductos[i][0];
    let precio = arrProductos [i][1];
   document.getElementById("txtProducto").innerHTML+=`<option value="${i}"> ${nombre}  ${precio}</option>`;
    
  }

  let carrito = [];

  function anadir (){

    let selector = document.querySelector("#txtProducto").value;
    let nombre = arrProductos[selector][0];
    let precio = arrProductos[selector][1];
    let cant = document.querySelector("#txtCantidad").value;

    carrito.push([nombre, precio, cant]);

  }

  function pedido (){

    let sol =`  <table>
    <thead>
    <tr>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Subtotal</th>
    </tr>
    </thead><tbody>`;

    let total = 0;

    for (let prod of carrito) {
        
        let nombre = prod[0];
        let precio = prod[1];
        let cant = prod[2];
        let subtotal = precio*cant;
        
        sol+=`<tr><td>${nombre}</td><td>${cant}</td><td>${precio}</td><td>${subtotal}</td></tr>`
        
        total+=subtotal;
    };

    sol+= `</tbody><tfoot><tr><th colspan=3>Total<th><th>${total.toFixed(1)}€</th></tr></tfoot></table>`

    divResultado.innerHTML+=sol


  }


  let divResultado = document.querySelector("#divResultado");

  let btnAnadir = document.querySelector("#btnAnadir");
  btnAnadir.addEventListener("click", anadir);


  let verPedido =document.querySelector("#btnPedido");
  verPedido.addEventListener("click", pedido);
