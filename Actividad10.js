const prompt=require("prompt-sync")();

let indice=parseInt(prompt("Ingrese un índice de contaminación: "));

if (indice <= 37) {
    console.log("Índice aceptable");
} else if (indice >= 38 && indice <= 55) {
    console.log("Índice desagradable");
} else {
    console.log("Índice peligroso");
}