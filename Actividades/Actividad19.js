const prompt = require('prompt-sync')();

let numero = 0; 
while (numero != 1 || numero != 5) {
    numero = Number(prompt('Ingresa un número entre 1 y 5: '));

    if (numero < 1 || numero > 5) {
        console.log('Número inválido. Intenta de nuevo.');
    }
}

console.log(`El ciclo finalizó`);
