const prompt = require("prompt-sync")();

function AgregarDatos() {
    let datos = [];
    let continuar = "si";

    while (continuar.toLowerCase() === "si") {

        let nombre = prompt("Ingresa tu nombre: ");
        let edad = parseInt(prompt("Ingresa tu edad: "));

        let persona = { nombre, edad };
        datos.push(persona);

        continuar = prompt("¿Deseas agregar otra persona? (si/no): ");
    }

    console.log("Personas registradas:");
    console.log(datos);
}

AgregarDatos();
