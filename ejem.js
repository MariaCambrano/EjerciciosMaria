const prompt = require('prompt-sync')();
function Rango(){
let valor = 0; 
while (valor<1 || valor >5 ){
    valor=parseInt(prompt("Ingrese un número del 1 al 5 para terminar "));
    console.log("El número es ${valor} es válido");
}
}
Rango();