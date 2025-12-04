const prompt=require("prompt-sync")();

let edad;
    edad=parseInt(prompt("Ingresa tu edad: "));
     
    if (edad>=18){
        console.log("Acceso permitido");
    }  
    else if (edad<18){
        console.log("Acceso denegado");
    }
    
