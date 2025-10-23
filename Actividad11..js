const prompt=require("prompt-sync")();
let N=parseInt(prompt("Ingrese un número: "));

let contador=0;
console.log("Números impares desde 1 hasta " + N + ":");

for (let i = 1; i <= N; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        contador++;
    }
}

console.log("Cantidad de números impares: " + contador);