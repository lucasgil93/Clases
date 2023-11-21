let texto = document.getElementById("txtname");


document.addEventListener("keyup", e => {
    divResultado.innerHTML = texto.value;
})


btnProcede.addEventListener('click', comprueba);

function comprueba(){

    let contador =  0;

let cbox1 = document.getElementById("mañana").value;
let cbox2 = document.getElementById("tarde").value;
let cbox3 = document.getElementById("noche").value;

alert(cbox1)
alert(cbox2)
alert(cbox3)

    if (contador>=3){
        divCosas.innerHTML="Error: no puede seleccionar las tres";
    }
     else if (contador==0){
        divCosas.innerHTML="Error: Seleccione al menos una opcion"
    } else{
        divCosas.innerHTML=`<p> Ha seleccionado: ${cbox1}, ${cbox2}, ${cbox3}`;
    }
}

