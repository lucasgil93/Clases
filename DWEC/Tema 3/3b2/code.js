"use strict";

let getCookies = document.cookie;

let s;


function recuperarCookie(s){

if (getCookies.includes(s)){

    let arrCookies =  getCookies.split(";");

    for (let i=0; i <arrCookies.length;i++){

        if (arrCookies[i].includes(s)){
            console.log(arrCookies[i]);
        }

    }

};

}