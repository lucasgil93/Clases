"use strict";

const ocultarTodosLosFormularios = () => {
    //1.- Añadimos la clase oculto a las div.formulario
    document.querySelectorAll(".form-horizontal").forEach(
        formulario => formulario.classList.add("oculto")
    );
}

var btnMostrarAlta = document.getElementById("btnMostrarAlta");
var btnMostrarVenta = document.getElementById("btnMostrarVenta");
var btnMostrarTotales = document.getElementById("btnMostrarTotales");
var btnMostrarListado = document.getElementById("btnMostrarListado");

btnMostrarAlta.addEventListener("click", function () {
    alert("Se hizo clic en el botón Alta de bicicleta");
    ocultarTodosLosFormularios();
    btnMostrarAlta.classList.remove(".oculto");

});

btnMostrarVenta.addEventListener("click", function () {
    alert("Se hizo clic en el botón Venta de bicicleta");

});

btnMostrarTotales.addEventListener("click", function () {
    alert("Se hizo clic en el botón Totales");
});

btnMostrarListado.addEventListener("click", function () {
    alert("Se hizo clic en el botón Listado separado");
});

var btnVentaBicicleta = document.getElementById("btnVentaBicicleta");
var btnAltaBicicleta = document.getElementById("btnAltaBicicleta");

btnVentaBicicleta.addEventListener("click", function () {
    alert("Se hizo clic en el botón Venta de bicicleta");
});

btnAltaBicicleta.addEventListener("click", function () {
    alert("Se hizo click en el boton Alta de Bicicleta");
});




