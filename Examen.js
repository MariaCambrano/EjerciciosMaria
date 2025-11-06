const prompt=require("prompt-sync")();
function Examen(){
    let suma=0;
    let numero;
    while(numero!=0){
    numero=parseInt(prompt("Ingrese un número: "));
    suma=suma+numero;
    }
    console.log(`La suma de los número es ${suma}`)
}
Examen();