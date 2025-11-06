function DatosArreglos(){
    let Datos=[3,7,9,3,2,6]

    /* for(i=1;i<Datos.length;i++){
    if(Datos[i]!=0){
        suma+=Datos[i]
    }
    }
    console.log(`La suma de los números impares es ${suma}`) */
         
        //For..of
    /* for(let numeros of Datos){
        console.log(`Los datos del arreglo son ${numeros}`);
    } */

        /* // FOR.. IN //
        for(let numeros in Datos){
            console.log(`Los datos son: ${Datos[numeros]}`);
        } */

            /* // FOR EACH //
            Datos.forEach(function(numeros){
                console.log(numeros);
                
            }) */
//Función fleca con for..each
              /*   Datos.forEach(numeros=>console.log(numeros)) */
/* 
              // WHILE //
              let i=0;
              while(i<Datos.length){
console.log(Datos[i]);
i++;
              } */

// DO WHILE //
           /*   let i=0;

do{
    console.log(Datos[i]);
    i++;
    }while(i<Datos.length) */

    /* // MAP //
    Datos.map(numeros=>console.log(numeros*2)); */

/* 
    // FILTER
    const newArreglo=Datos.filter((numeros)=>{ 
    return numeros<7;
 })
 console.log(newArreglo); */


 // REDUCE //
 let suma=0;
 Datos.reduce((a,b)=>suma=a+b)
 console.log(suma);
 
}
DatosArreglos();



/*
ES6
for of
while
do while
for each
for in
map
reduce
filter
*/

//Index=Indices