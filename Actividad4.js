const prompt=require("prompt-sync")();

let n=parseInt(prompt("Ingresa un numero: "));

for(i=1;i<=10;i++){
let resultado = n*i;
console.log(`${n} x ${i} = ${resultado}`);
}