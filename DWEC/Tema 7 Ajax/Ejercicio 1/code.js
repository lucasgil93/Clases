"use strict";

//////////////////
// FUNCTION
///////////////////


function gestionarFichero(xml) {
	const divResultado = document.getElementById("resultado");
	let res = "";

	xml.querySelectorAll("food").forEach( p=>{
		const nombre = p.querySelector("name");
		const precio = nombre.nextElementSibling;
		const description = precio.nextElementSibling;
		const calorias = p.querySelector("calories");
		
		res += `<div class="tarjeta"><h3>${nombre.textContent}</h3><p>${description.textContent}</p><notice> Precio: ${precio.textContent} - Calorias: ${calorias.textContent}</notice></div>`;
	});

	divResultado.innerHTML += `${res}`;
}



function loadXMLDoc(filename, callback) {
	let xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	}
	else { // code for IE5 and IE6
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === XMLHttpRequest.DONE) {
			if (xhttp.status === 200) {
				callback(xhttp.responseXML);
				// callback(xhttp.responseText); // si el fichero es de texto
			} else {
				console.log("Hubo un error con la petición.");
			}
		}
		
	};
	xhttp.open("GET", filename, true); //true = asíncrona, //false = síncrona
	xhttp.send();
}


function leerFicheroXML() {
	loadXMLDoc("cosa.xml", gestionarFichero);
	console.log("Petición mandada");
}



//////////////////
// MAIN
///////////////////
leerFicheroXML();