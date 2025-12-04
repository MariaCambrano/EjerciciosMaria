const prompt=require("prompt-sync")();
let edadd;
edadd=parseInt(prompt("Ingresa una edad: "));
anio=365;
horaspord=8
let horast=anio*horaspord*edadd;
console.log(`El total de horas que ha dormido durante toda su vida es: ${horast}`)