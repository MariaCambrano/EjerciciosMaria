const prompt=require("prompt-sync")();

let cal;
cal=parseInt(prompt("Ingresa una calificación: "));

if (cal>=90 && cal<=100){
    console.log("Excelente");   
} else if (cal>=70 && cal<=89){
    console.log("Buena");
} else{
    console.log("Reprobado");
}
