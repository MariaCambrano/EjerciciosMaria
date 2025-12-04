const prompt=require("prompt-sync")();
//DATOS INICIALES
let cm1=89;
let cm2=58;
let cm3=89;
let m=1.70;
let kg=53;
//FACTORES DE CONVERSIÓN
let pulgada=0.393701;
let pies=3.28084;
let libra=2.20462;
//CONVERSIONES
pulg1=cm1*pulgada;
pulg2=cm2*pulgada;
pulg3=cm3*pulgada;
pies=m*pies;
lib=kg*libra;
//RESULTADOS
console.log(`Medidas en pulgadas: ${pulg1.toFixed(2)} - ${pulg2.toFixed(2)} - ${pulg3.toFixed(2)} in`);
console.log(`Altura en pies: ${pies.toFixed(2)} ft`);
console.log(`Peso en libras: ${lib.toFixed(2)} £`);
