"use strict"

function media (x){

    let acc = 0;

    for (let index = 0; index < x.length; index++) {
        acc+=x[index];
        
    }

    let med = acc/x.length;

    return med;

}

console.log("La media de los numeros es de "  + media([4,5,8,6,2]));


