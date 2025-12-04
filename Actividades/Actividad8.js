const prompt=require("prompt-sync")();
let libros=568;
let cantlib=4;
let totallib=(libros*cantlib)*(1-0.20);

let discos=45;
let cantdisc=3;
let totaldisc=(discos*cantdisc)*(1-0.15);


let tocadiscos=678;

let subtotal=totallib + totaldisc + tocadiscos;

let totalfinal=subtotal*(1-0.02);

console.log("RECIBO DE COMPRA");
console.log(`$${totalfinal.toFixed(3)}`)
