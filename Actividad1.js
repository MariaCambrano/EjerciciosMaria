const prompt=require("prompt-sync")();

function ejercicio1(){
    let num1 = parseInt(prompt("Ingresa un valor: "));

    if (num1 > 0){
        console.log("Su número tiene un valor positivo");
            } else if (num1 < 0){
                console.log("Su número tiene un valor negativo");
            } else {
                console.log("Su número tiene un valor igual a cero");
            }
}
ejercicio1();