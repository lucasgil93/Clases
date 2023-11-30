"use strict";

class Medico {
    constructor(idMedico, nombre, telefono, email, colegiado) {
        this.idMedico = idMedico;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.colegiado = colegiado;
    }

    toHTMLRow() {
        return `<tr><td>${this.idMedico}</td><td>${this.nombre}</td><td>${this.telefono}</td><td>${this.email}</td><td>${this.colegiado}</td></tr>`;
    }
}

class Cita {

    constructor(idMedico, paciente, fecha, hora) {
        this.idMedico = idMedico;
        this.paciente = paciente;
        this.fecha = fecha;
        this.hora = hora;

    }
    toHTMLRow() {
        return `<tr><td>${this.idMedico}</td><td>${this.paciente}</td><td>${this.fecha}</td><td>${this.hora}</td></tr>`;
    }

}

class Hospital {

    constructor(medicos = [], citas = []) {
        this.medicos = medicos;
        this.citas = citas;
    }

    altaMedico(oMedico) {

        const yaExisteEseId = (this.medicos.some(m => m.idMedico === oMedico.idMedico));

        if (yaExisteEseId){
            return "Error: idMedico registrado previamente";
        } else{
            this.medicos.push(oMedico);
            return "Alta de medico OK";
        }
       
    };

    altaCita(oCita) {

        const yaExisteEseId = (this.medicos.some(m => m.idMedico === oCita.idMedico));
        // Si el producto existe en el almacén, podemos modificar su stock
        if (yaExisteEseId) {
            this.citas.push(oCita);
            return "Alta de cita OK";
        } else {
            return "Error: idMedico no registrado, no es posible realizar la cita";
        }



    }
    listadoMedicos() {

        let contEmail = 0;
        let s;
        s = "<table><caption>Listado Medicos</caption>";
        s += "<thead><tr><th>IDMedico</th><th>Nombre</th><th>Telefono</th><th>Email</th><th>Colegiado</th></tr></thead>";
        s += "<tbody>";

        for (let medico of this.medicos) {
            s += medico.toHTMLRow();

            if (medico.email == "") {
                contEmail++;
            } else {
            }
        }

        s += `</tbody><tfoot><tr><td>Numero de medicos sin email registrado:</td><td>${contEmail}</td></tr></tfoot></table>`;
        return s;

    }
    listadoCitas() {

        let s;
        s = "<table><caption>Listado Citas</caption>";
        s += "<thead><tr><th>IDMedico</th><th>Paciente</th><th>Fecha</th><th>Hora</th></tr></thead>";
        s += "<tbody>";

        for (let cita of this.citas) {
            s += cita.toHTMLRow();
        }

        s += "</tbody></table>";
        return s;


    }

}