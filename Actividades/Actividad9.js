const prompt=require("prompt-sync")();
let numer1=parseInt(prompt("Ingrese el primer número: "));
let numer2=parseInt(prompt("Ingrese el segundo número: "));

if (numer1>numer2){
    let suma=numer1+numer2;
    console.log(`La suma de los dos números es: ${suma}`);
} else if(numer2>numer1){
    let sumaa=numer2+numer1;
    console.log(`La sumatoria de los dos números es: ${sumaa}`);
} else if(numer1=numer2){
    producto=numer1*numer2;
    console.log(`El producto de los dos números es: ${producto}`);
}
