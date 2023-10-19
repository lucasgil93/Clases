"use strict";


////// Clases 

function Crema (no, pr, ing, marca){

    this.nombre = no,
    this.precio = pr,
    this.marca = marca,
    this.ingredientes = [],
    this.anadirIngrediente = function(nombre, cantidad) {
        this.ingredientes.push(new Ingrediente(nombre, cantidad));
    },
    this.mostrarDatos = function () { return `${this.nombre} (${this.precio} €), creada con ${this.ingredientes}`}

    this.removeIngrediente = function (i) {
        this.ingredientes.splice(i, 1);
    }

    this.toHTMLTable = function () {

        let s = "<table>";
        s+=`<caption>${this.nombre} (${this.precio})</caption>`;
        s+=`<thead><tr><th>Nombre</th><th>Precio</th></tr></thead>`;
        s+=`<tbody>`;

        for (let ing of this.ingredientes){
            s+=ing.toHTMLRow();
        }

        s+=`<t/body>`;
        s+=`<tfoot><tr><th colspan="2">${this.marca}</th></tr></tfoot></table>`;
        return s;


    }

}


    
function Ingrediente (no, cant){

    this.nombre = no,
    this.cantidad = pr,
    this.toHTMLRow = function () { return `<tr><td>${this.nombre}</td><td>${this.cantidad}</td></tr>`}
    }