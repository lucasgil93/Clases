"use strict";

//FUNCTIONS

function ocultarTodosFormularios() {

    document.querySelectorAll(".formulario").forEach(
        form => form.classList.add("oculto")
    );

};

function muestraAltaMedico() {

    ocultarTodosFormularios();
    document.querySelector("#divFrmAltaMedico").classList.remove("oculto");
};

function muestraAltaCita() {
    ocultarTodosFormularios();
    document.querySelector("#divFrmAltaCita").classList.remove("oculto");
}

function pruebaAltaMedico() {

    let idMedico = frmAltaMedico.querySelector("input[name=txtIdMedico]").value;
    let nombre = frmAltaMedico.querySelector("input[name=txtNombre]").value;
    let telefono = frmAltaMedico.querySelector("input[name=txtTelefono]").value;
    let email = frmAltaMedico.querySelector("input[name=txtEmail]").value;
    let colegiado = frmAltaMedico.querySelector("input[name=txtColegiado]").value;

    let hayCamposVacios = false;

    if (idMedico == "" || nombre == "" || telefono == "" || colegiado == "") {
        hayCamposVacios = true;
    }


    if (hayCamposVacios) {
        alert("Hay campos vacios")
    } else {
        let oMedico = new Medico(idMedico, nombre, telefono, email, colegiado);

        listado.innerHTML = hospital1.altaMedico(oMedico);
    }



}

function pruebaAltaCita() {

    let idMedico = frmAltaCita.querySelector("input[name=txtIdMedico]").value;
    let paciente = frmAltaCita.querySelector("input[name=txtPaciente]").value;
    let fecha = frmAltaCita.querySelector("input[name=txtFecha]").value;
    let hora = frmAltaCita.querySelector("input[name=txtHora]").value;

    let oCita = new Cita(idMedico, paciente, fecha, hora);

    listado.innerHTML = hospital1.altaCita(oCita)


        ;

}

function muestraListaMedicos() {
    listado.innerHTML = hospital1.listadoMedicos();
};

function muestraListaCitas() {
    listado.innerHTML = hospital1.listadoCitas();
};


//MAIN
ocultarTodosFormularios();


let btnFormAltaMedico = document.querySelector("#btnFormAltaMedico");
btnFormAltaMedico.addEventListener("click", muestraAltaMedico);

let btnFormAltaCita = document.querySelector("#btnFormAltaCita");
btnFormAltaCita.addEventListener("click", muestraAltaCita);

let hospital1 = new Hospital;

let btnAltaMedico = document.querySelector("#btnAltaMedico");
btnAltaMedico.addEventListener("click", pruebaAltaMedico);

let btnAltaCita = document.querySelector("#btnAltaCita");
btnAltaCita.addEventListener("click", pruebaAltaCita);

let listado = document.querySelector("#listado");

let btnListadoMedicos = document.querySelector("#btnListadoMedicos");
btnListadoMedicos.addEventListener("click", muestraListaMedicos);

let btnListadoCitas = document.querySelector("#btnListadoCitas");
btnListadoCitas.addEventListener("click", muestraListaCitas);




