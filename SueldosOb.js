const prompt = require("prompt-sync")();

function AgregarDatos() {

    let datos = [];

    // pedir número de personas
    let cantidad = parseInt(prompt("¿Cuántas personas deseas registrar?: "));

    // Validación
    while (isNaN(cantidad) || cantidad <= 0) {
        cantidad = parseInt(prompt("Ingresa un número válido de personas: "));
    }

    let i = 1;

    // Repetir hasta registrar la cantidad indicada
    while (i <= cantidad) {

        console.log(`\nRegistro de la persona ${i}:`);

        let nombre = prompt("Ingresa tu nombre: ");
        let edad = parseInt(prompt("Ingresa tu edad: "));
        let sueldo = parseFloat(prompt("Ingresa tu sueldo: "));

        let persona = { nombre, edad, sueldo };
        datos.push(persona);

        i++;
    }

    console.log("\nPersonas registradas:");
    console.log(datos);

    // Mostrar cuánto gana cada uno usando .map()
    console.log("\nSueldo por persona:");
    datos.map(p => {
        console.log(`${p.nombre} gana $${p.sueldo}`);
    });

    // Calcular la suma total de sueldos
    let sumaTotal = datos.reduce((total, p) => total + p.sueldo, 0);
    console.log(`\nLa suma total de sueldos es: $${sumaTotal}`);
}

AgregarDatos();
