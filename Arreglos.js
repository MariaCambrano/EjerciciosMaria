//Declaración de arreglos
/* 
Tipos de datos - Primitivos
Numbers
String
Boolean
Null
Undifined

Tipos de datos - compuestos
Object
Array
Function
*/


function DatosArregLos(){
    let Datos=[3,7,9,3,2,6];
    let suma=0;
    for(i=0;i<Datos.length;i++){
        if((Datos[i])%2==0){
   suma+=Datos[i];
        }
     }
 console.log(`La suma de los datos es ${suma}`);
    }
DatosArregLos();