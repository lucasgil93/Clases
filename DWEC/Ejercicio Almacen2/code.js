"use strict";

    var btnMostrarAlta = document.getElementById("btnMostrarAlta");
    var btnMostrarVenta = document.getElementById("btnMostrarVenta");
    var btnMostrarTotales = document.getElementById("btnMostrarTotales");
    var btnMostrarListado = document.getElementById("btnMostrarListado");

    btnMostrarAlta.addEventListener("click", function() {
        alert("Se hizo clic en el botón Alta de bicicleta");

    });

    btnMostrarVenta.addEventListener("click", function() {
        alert("Se hizo clic en el botón Venta de bicicleta");

    });

    btnMostrarTotales.addEventListener("click", function() {
        alert("Se hizo clic en el botón Totales");
    });

    btnMostrarListado.addEventListener("click", function() {
        alert("Se hizo clic en el botón Listado separado");
    });

    var btnVentaBicicleta = document.getElementById("btnVentaBicicleta");
    var btnAltaBicicleta = document.getElementById("btnAltaBicicleta");

    btnVentaBicicleta.addEventListener("click", function() {
        alert("Se hizo clic en el botón Venta de bicicleta");
    });

    btnAltaBicicleta.addEventListener("click", function(){
        alert("Se hizo click en el boton Alta de Bicicleta");
    });
