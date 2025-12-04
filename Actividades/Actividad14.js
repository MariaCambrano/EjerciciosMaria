const prompt = require("prompt-sync")();

// Leer número
let N = parseInt(prompt("Ingrese un número: "));

// Verificar si es mayor que cero
if (N > 0) {
    console.log("El número " + N + " es mayor que cero.");
    // Verificar si es par o impar
    if (N % 2 === 0) {
        console.log("Además, es par.");
    } else {
        console.log("Además, es impar.");
    }
} else if (N < 0) {
    console.log("El número " + N + " no es mayor que cero, es negativo.");
} else {
    console.log("El número es cero, no es mayor que cero ni negativo.");
}
