"use strict"

let arrProductos=[ 
    ["Ambientador", 1.25],  
    ["Queso en lonchas", 2.80], 
    ["Turrón de chocolate", 1.70], 
    ["Chirimoya", 1.54],
    ["Granada", 0.48],  
    ["Arroz", 1.30],
  ];


let txtProducto = document.getElementById("txtProducto");


for (let i = 0; i<arrProductos.length;i++){

let nombre = arrProductos[i][0];
let precio = arrProductos[i][1];

txtProducto.innerHTML += `<option value=${i}> ${nombre} ${precio} €</option>`;

}

let btnCarrito = document.getElementById("btnCarrito");
btnCarrito.addEventListener('click', carrito);


let txtPedido = document.getElementById("txtPedido");
txtPedido.innerHTML+=`<table>
<tr>
  <th>Producto</th>
  <th>Precio</th>
  <th>Cantidad</th>
  <th>Total</th>
</tr>
</thead>
</tbody> `

let txtCantidad = document.getElementById("txtCantidad");

function carrito(){

txtPedido.innerHTML+=`<tr>`;
txtPedido.innerHTML+=`<tr>
    <td>${arrProductos[txtProducto.value][0]}</td>
    <td>${arrProductos[txtProducto.value][1]}</td>
    <td>${txtCantidad}</td>
    <td>eval(${arrProductos[txtProducto.value][1]}*${txtCantidad}/td>
`;
txtPedido.innerHTML+=`<tr>`;
}

let btnPedido = document.getElementById("btnPedido");
btnPedido.addEventListener('click', pedido);

function pedido(){

alert("Pedido sin implementar");

}