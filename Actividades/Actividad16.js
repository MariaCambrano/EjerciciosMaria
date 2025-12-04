const prompt = require('prompt-sync')();


let edad = Number(prompt('Ingresa tu edad: '));
let nota = Number(prompt('Ingresa tu nota: '));
let sexo = prompt('Ingresa tu sexo (M/F): ').toUpperCase(); 


let resultado;

if (nota==5 && edad==18 && sexo=='M') {
    resultado = 'POSIBLE';
} else if (nota==5 && edad==18 && sexo=='F') {
    resultado = 'ACEPTADA';
} else {
    resultado = 'NO ACEPTADA';
}


console.log(`Tu solicitud está: ${resultado}`);
