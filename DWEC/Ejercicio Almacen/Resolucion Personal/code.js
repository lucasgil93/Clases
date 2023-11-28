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

function mostrarAltaForm (){

    ocultarTodosFormularios();
    altaForm.classList.remove("oculto");

}

//Creamos lo necesario para mostrar el segundo formulario.

let btnModStock = document.getElementById("btnFormEntradaSalidaStock");

btnModStock.addEventListener("click", mostrarModStock);

let salidaStock = document.getElementById("frmEntradaSalidaStock")

function mostrarModStock (){

    ocultarTodosFormularios();
    salidaStock.classList.remove("oculto");

}

//Creamos lo necesario para mostrar el primer listado.

let btnList1 = document.getElementById("btnListadoCatalogo");

btnList1.addEventListener("click", mostrarList1);

function mostrarList1(){

    alert("mostramos lista 1");
}

//Creamos lo necesario para mostrar el segundo listado.

let btnList2 = document.getElementById("btnListadoStock");

btnList2.addEventListener("click", mostrarList2);

function mostrarList2(){

    alert("mostramos lista 2");
}


