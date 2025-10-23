const prompt = require('prompt-sync')();

let alumnos = Number(prompt('Ingresa el número de alumnos: '));

let costoPorAlumno;
let pagoTotal;

if (alumnos >= 100) {
    costoPorAlumno = 65;
    pagoTotal = alumnos * costoPorAlumno;
} else if (alumnos >= 50 && alumnos <= 99) {
    costoPorAlumno = 70;
    pagoTotal = alumnos * costoPorAlumno;
} else if (alumnos >= 30 && alumnos <= 49) {
    costoPorAlumno = 95;
    pagoTotal = alumnos * costoPorAlumno;
} else if (alumnos < 30) {
    pagoTotal = 4000;
    costoPorAlumno = pagoTotal / alumnos; 
} else {
    console.log('Número de alumnos inválido');
}

console.log(`Pago total a la compañía: $${pagoTotal}`);
console.log(`Costo por alumno: $${costoPorAlumno.toFixed(2)}`);
