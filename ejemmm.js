const prompt = require('prompt-sync')();
function SumaNumeros(){
let numero;
let suma = 0;

while (numero%2===0){
    numero=parseInt(prompt("Ingresa un número !=0: "));
    suma=suma+numero;
    }
    console.log("La suma de los números ingresados es: ", suma);
}
SumaNumeros();