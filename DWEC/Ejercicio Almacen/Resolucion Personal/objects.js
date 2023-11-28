"use strict";

class Producto {

    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    };
    toString() {

    };

}

class Movil extends Producto {

    constructor(id, nombre, precio, modelo, android) {
        super(id, nombre, precio);
        this.modelo = modelo;
        this.android = android;
    };
    toHTMLRow() {

    };
}

class Carcasa extends Producto {

    constructor(id, nombre, precio, material) {
        super(id, nombre, precio);
        this.material = material;
    };
    toHTMLRow() {

    };
}

class StockProducto {

    constructor(idProducto, unidades) {
        this.idProducto = idProducto;
        this.unidades = unidades;
    };
    toHTMLRow() {

    };

}

class Almacen {

    constructor(catalogo, stock) {
        this.catalogo = catalogo;
        this.stock = stock;
    };

    altaProducto(oProducto) {
        return false;
    };
    entradaStock(idProducto, unidades) {

    };
    salidaStock(idProducto, unidades) {

    };
    listadoCatalogo() {

    };
    listadoStock() {

    };
    numCarcasaStock() {

    };
    importeTotalStock() {

    };

}

