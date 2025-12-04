const prompt = require("prompt-sync")();

let numero = Number(prompt('Ingresa un número: '));
let exponente = Number(prompt('Ingresa el exponente: '));

let resultado;

if (exponente > 0) {
    console.log('El exponente es positivo');
    resultado = (numero ** exponente);
} else if (exponente === 0) {
    console.log('El exponente es cero');
    resultado = 1;
} else {
    console.log('El exponente es negativo');
    resultado = 1 / (numero ** exponente);
}

console.log(`El resultado es: ${resultado}`);
