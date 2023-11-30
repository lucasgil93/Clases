"use strict"

//Ocultamos todos los formularios.

function ocultarTodosFormularios() {
    document.querySelectorAll(".formulario").forEach(form => form.classList.add("oculto"));
}

ocultarTodosFormularios();

//Creamos lo necesario para mostrar el primer formulario.

let btnAltaForm = document.getElementById("btnFormAltaProducto");

btnAltaForm.addEventListener("click", mostrarAltaForm);

let altaForm = document.getElementById("frmAltaProducto")

function mostrarAltaForm() {

    ocultarTodosFormularios();
    altaForm.classList.remove("oculto");

}

//Creamos lo necesario para mostrar el segundo formulario.

let btnModStock = document.getElementById("btnFormEntradaSalidaStock");

btnModStock.addEventListener("click", mostrarModStock);

let salidaStock = document.getElementById("frmEntradaSalidaStock")

function mostrarModStock() {

    ocultarTodosFormularios();
    salidaStock.classList.remove("oculto");

}

//Creamos lo necesario para mostrar el primer listado.

let btnList1 = document.getElementById("btnListadoCatalogo");

btnList1.addEventListener("click", mostrarList1);

function mostrarList1() {

    alert("mostramos lista 1");
}

//Creamos lo necesario para mostrar el segundo listado.



let btnList2 = document.getElementById("btnListadoStock");

btnList2.addEventListener("click", mostrarList2);

function mostrarList2() {

    alert("Mostramos lista 2");
}

//Capturamos los valores de Producto:


let btnAltaProducto = document.querySelector("#btnAltaProducto");
btnAltaProducto.addEventListener("click", creaProducto);

function creaProducto() {

    alert("funca");
}

let idProducto = document.querySelector("#txtIdProducto").value;
let nombreProducto = document.querySelector("#txtNombre").value;
let precioProducto = document.querySelector("#txtPrecio").value;
let tipoProducto = document.querySelector("[name=txtTipo]:checked").value;

let modeloMovil = document.querySelector("#txtModelo").value;

let esAndroid = document.querySelector("#txtAndroid").checked;

let materialCarcasa = document.querySelector("#txtMaterial").value;

