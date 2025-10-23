const prompt = require('prompt-sync')();

let respuesta = ''; 

while (respuesta.toLowerCase() !== 'n') { 
    respuesta = prompt('¿Desea continuar? (n para finalizar): ');
}

console.log('Programa finalizado');
