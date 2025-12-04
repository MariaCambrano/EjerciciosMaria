const prompt=require("prompt-sync")();
let suma = 0;

for (let i = 500; i <= 800; i++) {
    if (i % 2 === 0) { // Verifica si i es par
        suma += i;     // Suma el número par
    }
}

console.log("La sumatoria de los números pares entre 500 y 800 es: " + suma);
