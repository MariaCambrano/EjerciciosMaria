const prompt = require('prompt-sync')();

let numero;
let contadorPares = 0;

while (true) {
    numero = Number(prompt('Ingresa un número par (un número impar termina el programa): '));

    if (numero % 2 === 0) {
        contadorPares++; 
    } else {
        break; 
    }
}

console.log(`Cantidad de números pares ingresados: ${contadorPares}`);
