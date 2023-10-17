"use strict"




function seno (){

    let radianes = Number(prompt("Diga un numero en radianes"));
    let res = 1-(radianes*radianes)/2 + (radianes^4)/24 - (radianes^6)/720 + (radianes^8)/40320;

    console.log("Teniendo "+ radianes + " radianes su seno es de: " +  res);
    alert("Teniendo "+ radianes + " radianes su seno es de: " +  res);
    

}

function coseno(){

    let radianes = Number(prompt("Diga un numero en radianes"));
    let res = radianes - (radianes^3)/6 + (radianes^5)/120 - (radianes^7)/5040 + (radianes^9)/362880;

    console.log("Teniendo "+radianes + " radianes su coseno es de: " +  res);
    alert("Teniendo "+radianes + " radianes su coseno es de: " +  res);




}

seno();
coseno();