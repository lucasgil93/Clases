"use strict"

//Ocultamos todos los formularios.

let catalogo = [];
let stock =  [];

let almacen1 =  new Almacen (catalogo, stock);

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

    alert("mostramos lista 2");
}

let btnAltaProducto = document.querySelector("#btnAltaProducto");

btnAltaProducto.addEventListener("click", altaProducto);

function altaProducto() {

    let idProducto = document.querySelector("input[name=txtIdProducto]").value;
    let nombreProducto = document.querySelector("input[name=txtNombre]").value;
    let precioProducto = document.querySelector("input[name=txtPrecio]").value;
    let tipoProducto = document.querySelector("input[name=txtTipo]:checked").value;
    let modeloMovil = document.querySelector("input[name=txtModelo]").value;
    let androidBool = document.querySelector("input[name=txtAndroid]:checked");
    
    if (androidBool==null){
        androidBool = false;
    } else {
        androidBool = true;
    };

    let materialCarcasa = document.querySelector("#txtMaterial").value;

    if (tipoProducto=="movil"){
        let producto1 = new Movil (idProducto, nombreProducto, precioProducto, modeloMovil, androidBool);
        if (almacen1.altaProducto(producto1)==true){
            almacen1.catalogo.push(producto1);
        } else {
            alert("Este id de este movil ya existe.");
        };
    } else{
        let producto1 = new Carcasa (idProducto, nombreProducto, precioProducto, materialCarcasa);
        if (almacen1.altaProducto(producto1)){
            almacen1.catalogo.push(producto1);
        } else{
            alert("Este id de esta carcasa ya existe.");
        };
    }

   




    alert("Alta producto.");

}


