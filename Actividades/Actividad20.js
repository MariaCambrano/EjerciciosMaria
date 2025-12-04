const prompt = require('prompt-sync')();

let numero;
let suma = 0;

do {
    numero = Number(prompt('Ingresa un número (0 para terminar): '));

    if (numero !== 0) {
        suma += numero; // se acumula la suma
        console.log(`La suma de los números ingresados es: ${suma}`);
    }

} while (numero !== 0);

console.log(`El ciclo terminó`);
