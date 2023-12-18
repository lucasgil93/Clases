"use strict";

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", topRight);

function topRight(){


    let toast = document.createElement("div");
    toast.style.position="fixed";
    toast.style.top=0;
    toast.style.right=0;

    toast.style.width="600px"
    toast.style.height="50px";
    toast.style.margin="1rem";

    document.body.appendChild(toast);

    toast.innerHTML = `<dialog open>
    <p>Dialogo arriba a la derecha</p>
    <form method="dialog">
        <button>OK</button>
    </form>
</dialog>`;
}

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", topCenter);

function topCenter(){


    let toast = document.createElement("div");

    toast.style.position="fixed";
    toast.style.top=0;
    toast.style.right="50vh";
    toast.style.margin="1rem";

    toast.style.width="600px"
    toast.style.height="50px";

    document.body.appendChild(toast);

    toast.innerHTML = `<dialog open>
    <p>Dialogo arriba al centro</p>
    <form method="dialog">
        <button>OK</button>
    </form>
</dialog>`;

}


let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", topLeft);

function topLeft(){


    let toast = document.createElement("div");
    toast.style.position="fixed";
    toast.style.top=0;
    toast.style.left=0;

    toast.style.width="600px"
    toast.style.height="50px";
    toast.style.margin="1rem";

    document.body.appendChild(toast);

    toast.innerHTML = `<dialog open>
    <p>Dialogo arriba a la izquierda</p>
    <form method="dialog">
        <button>OK</button>
    </form>
</dialog>`;
}


let btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", bottomRight);

function bottomRight(){


    let toast = document.createElement("div");
    toast.style.position="fixed";
    toast.style.bottom="10%";
    toast.style.right=0;

    toast.style.width="600px"
    toast.style.height="50px";
    toast.style.margin="1rem"

    document.body.appendChild(toast);

    toast.innerHTML = `<dialog open>
    <p>Dialogo abajo a la derecha</p>
    <form method="dialog">
        <button>OK</button>
    </form>
</dialog>`;
}

let btn5 = document.querySelector("#btn5");

btn5.addEventListener("click", bottomCenter);

function bottomCenter(){


    let toast = document.createElement("div");

    toast.style.margin="1rem";

    toast.style.width="600px"
    toast.style.height="50px";

    document.body.appendChild(toast);

    toast.innerHTML = `<dialog open>
    <p>Dialogo abajo al centro</p>
    <form method="dialog">
        <button>OK</button>
    </form>
</dialog>`;
}

let btn6 = document.querySelector("#btn6");

btn6.addEventListener("click", bottomLeft);

function bottomLeft(){


    let toast = document.createElement("div");

    toast.style.position="fixed";
    toast.style.bottom="10%";
    toast.style.left=0;
    toast.style.margin="1rem";

    toast.style.width="600px"
    toast.style.height="50px";

    document.body.appendChild(toast);

    toast.innerHTML = `<dialog open>
    <p>Dialogo abajo al centro</p>
    <form method="dialog">
        <button>OK</button>
    </form>
</dialog>`;
}

