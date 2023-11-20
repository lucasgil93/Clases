"use strict";

class Tienda {
    constructor(tBicis, numVentas) {
        this.tBicis = tBicis;
        this.numVentas = numVentas;
    }

    altaBicicleta(OBici) {

        this.tBicis.push(OBici);

    }
    ventaBici(sLocalizador) {

        for (let i = 0; i < this.tBicis.length; i++) {
            let biciActual = this.tBicis[i];

            if (biciActual.localizador === sLocalizador) {
               this.numVentas++;
            }
        }

    }
    listadoCarretera() {


        let sol;

        sol = `<table><thead><td>Bicis de Carretera></td></thead>`

        for (let i = 0; i < this.tBicis.length; i++) {
            let biciActual = this.tBicis[i];

            if (biciActual instanceof Carretera) {
                sol += biciActual.toHTMLrow();
            }
        }

        sol += `</table>`;
    }
    listadoMontania() {

        let sol;

        sol = `<table><thead><td>Bicis de Carretera></td></thead>`

        for (let i = 0; i < this.tBicis.length; i++) {
            let biciActual = this.tBicis[i];

            if (biciActual instanceof Carretera) {
                sol += biciActual.toHTMLrow();
            }
        }

        sol += `</table>`;

    }
    numCarretera() {

        let contCarretera = 0;

        for (let i = 0; i < this.tBicis.length; i++) {
            let biciActual = this.tBicis[i];

            if (biciActual instanceof Carretera) {
                contCarretera ++;
            }
        }
        return contCarretera;

    }
    numMontania() {

        let contMontaña = 0;

        for (let i = 0; i < this.tBicis.length; i++) {
            let biciActual = this.tBicis[i];

            if (biciActual instanceof Carretera) {
                contMontaña ++;
            }
        }

        return contMontaña;

    }
    numTotal() {

        return this.tBicis.length; 

    }
    numVenta() {
        return this.numVentas;

    }


}

class Bicicleta {
    constructor(localizador, año, vendida) {
        this.localizador = localizador;
        this.año = año;
        this.vendida = vendida;
    }

    toHTMLrow() {
        return `<tr><td>${this.localizador}</td><td>${this.año}</td><td>${this.vendida}</td></tr>`
    }

}

class Carretera extends Bicicleta {
    constructor(numPlatos) {
        super(this.localizador, this.año, this.vendida);
        this.numPlatos = numPlatos;

    }

    toHTMLrow() {
        return `<tr><td>${this.localizador}</td><td>${this.año}</td><td>${this.vendida}</td><td>${this.numPlatos}</td></tr>`
    }

}

class Montaña extends Bicicleta {
    constructor(numSuspensiones) {
        super(this.localizador, this.año, this.vendida);
        this.numSuspensiones = numSuspensiones;

    }

    toHTMLrow() {
        return `<tr><td>${this.localizador}</td><td>${this.año}</td><td>${this.vendida}</td><td>${this.numSuspensiones}</td></tr>`
    }

}